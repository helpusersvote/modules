import React from 'react'
import { shouldShowCTA } from '@helpusersvote/logic'

export class ShouldShowCTA extends React.Component {
  render() {
    const { opposite, children } = this.props
    const { visible } = this.state
    const visibility = visible || this.props.visible
    const isVisible = opposite ? !visibility : visibility

    return isVisible ? children : <noscript />
  }

  constructor(props) {
    super(props)

    const { state, check, debug } = props
    const visible = props.clientSide
      ? false
      : shouldShowCTA({ state, check, debug })

    this.state = { visible }
  }

  componentDidMount() {
    const { clientSide, state, check, debug } = this.props

    if (clientSide) {
      const visible = shouldShowCTA({ state, check, debug })

      this.setState({ visible })
    }
  }
}

ShouldShowCTA.defaultProps = {
  state: '',
  check: '',
  debug: false
}

ShouldShowCTA.displayName = 'ShouldShowCTA'

export const ShouldShowCta = ShouldShowCTA

export default ShouldShowCTA
