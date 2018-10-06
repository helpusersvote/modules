import React from 'react'
import { getCountdown } from '@helpusersvote/logic'

import colors from '../utils/colors'

const formatters = {
  default: ({ days, hours }) => {
    if (days < 1) {
      return `${hours} hours`
    } else {
      return `${days} days`
    }
  },
  running: ({ days, remainder }) => [days, remainder].join('.')
}

export function Countdown({ didError, diff, format }) {
  if (didError) {
    return <span />
  }

  const formattedContent = formatters[format](diff || {})

  return (
    <React.Fragment>
      <span>{formattedContent}</span>
      <style>{`
        body, html {
          margin: 0;
          font-family: SF UI Display, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica, Arial, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        }
      `}</style>
    </React.Fragment>
  )
}

Countdown.defaultProps = {
  didError: false,
  format: 'default'
}

function withCountdown(Component) {
  const hoc = class extends React.Component {
    render() {
      const { countdownInput: input, ...props } = this.props
      const { diff } = this.state

      return <Component diff={diff} {...props} />
    }

    constructor(props) {
      super(props)

      this.state = { diff: getCountdown() }
    }

    componentDidMount() {
      const { format } = this.props

      if (format === 'running') {
        this._ivl = setInterval(
          () =>
            this.setState({
              diff: getCountdown()
            }),
          45
        )
      }
    }

    componentWillUnmount() {
      if (this._ivl) {
        clearInterval(this._ivl)
      }
    }
  }

  hoc.displayName = 'withCountdown(Countdown)'

  return hoc
}

export default withCountdown(Countdown)
