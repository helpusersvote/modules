import React, { Component } from 'react'
import { getMapImage } from '../utils'

const RESIZE_TIMEOUT_MS = 50

export class DirectionsMap extends Component {
  render() {
    const { directionsHref, userAddr, pollAddr } = this.props
    const { isResizing } = this.state
    let styles = {
      background: '#eaeaea',
      opacity: 0.8
    }

    if (!isResizing) {
      const { width, height } = this.state
      const mapImageSrc = getMapImage({
        width,
        height,
        userAddr,
        pollAddr
      })

      styles = {
        backgroundImage: `url(${mapImageSrc})`
      }
    }

    return (
      <a
        ref={ref => this.handleRef(ref)}
        className="directions-map db w-100 h-100"
        href={directionsHref}
        target="_blank"
        style={styles}
      />
    )
  }

  state = {
    isResizing: true
  }

  handleRef(ref) {
    this._ref = ref
  }

  componentDidMount = () => {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount = () => {
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout)
    }

    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = () => {
    this.setState({
      isResizing: true
    })

    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout)
    }

    this._resizeTimeout = setTimeout(this.handleResize, RESIZE_TIMEOUT_MS)
  }

  handleResize = () => {
    const ref = this._ref

    if (!ref) {
      this.setState({ isResizing: false })
    }

    const { width, height } = getElementSize(ref)

    this.setState({ isResizing: false, width, height })
  }
}

export function DirectionsHours({ location, pollingPlace }) {
  const hoursText =
    location.hours && location.hours.length > 0
      ? location.hours
      : pollingPlace.hours

  return (
    <div className="directions-hours mt3">
      <div className="directions-label pb1">Hours</div>
      <div className="directions-hours fw6">
        <div className="fr">{hoursText}</div>
        <div className="fw6 directions-date">
          November 6<sup style={{ fontSize: 9 }}>th</sup>
        </div>
      </div>
    </div>
  )
}

function getElementSize(node) {
  const size = node.getBoundingClientRect() || {}
  const width = Math.ceil(size.width || 0)
  const height = Math.ceil(size.height || 0)

  return { width, height }
}

export default { DirectionsDate, DirectionsHours, DirectionsMap }
