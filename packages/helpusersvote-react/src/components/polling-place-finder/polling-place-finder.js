import React, { Component } from 'react'
import PollingPlaceFinderError from './stateless/polling-place-finder-error'
import PollingPlaceDirections from './polling-place-directions'
import EarlyVotingDirections from './early-voting-directions'
import AddressForm from './stateless/address-form'
import {
  loadGmaps,
  trackEvent,
  reportError,
  trackPageview,
  fetchVoterInfo,
  getQueryAddress,
  listenForEvents,
  normalizeVoterInfo,
  getEncryptedAddress,
  setEncryptedAddress,
  getEncryptedVoterInfo,
  setEncryptedVoterInfo,
  getQueryParam
} from './utils'

class PollingPlaceFinder extends Component {
  render() {
    const { onSelectAddress, onChangeAddress, onClickDirections } = this
    const { type, notFound, children } = this.props
    const {
      ready,
      address,
      didError,
      voterInfo,
      queryParams,
      shouldUseAutocomplete
    } = this.state

    if (!ready) {
      return <div className="huv-container" />
    }

    if (didError) {
      return (
        <div className="huv-container">
          <PollingPlaceFinderError />
        </div>
      )
    }

    if (notFound && address) {
      return (
        <div className="huv-container">
          <PollingPlaceDirections
            notFound
            address={address}
            voterInfo={voterInfo}
            queryParams={queryParams}
            onChangeAddress={onChangeAddress}
            onClickDirections={onClickDirections}
          />
        </div>
      )
    }

    let content

    if (!(address && address.line1 && voterInfo && voterInfo.locations)) {
      content =
        type === 'early' ? (
          <AddressForm
            title="Find your early voting location"
            description="We’ll find where you can go vote early, so you can skip Election Day lines."
            useAutocomplete={shouldUseAutocomplete}
            onSelectAddress={onSelectAddress}
          />
        ) : (
          <AddressForm
            useAutocomplete={shouldUseAutocomplete}
            onSelectAddress={onSelectAddress}
          />
        )
    } else {
      if (type === 'early') {
        content = (
          <EarlyVotingDirections
            address={address}
            voterInfo={voterInfo}
            queryParams={queryParams}
            onChangeAddress={onChangeAddress}
            onClickDirections={onClickDirections}
          />
        )
      } else {
        content = (
          <PollingPlaceDirections
            address={address}
            voterInfo={voterInfo}
            queryParams={queryParams}
            onChangeAddress={onChangeAddress}
            onClickDirections={onClickDirections}
          />
        )
      }
    }

    return (
      <div className="huv-container">
        {content}
        {children}
      </div>
    )
  }

  state = {
    queryParams: {},
    ready: false,
    address: {}
  }

  componentDidCatch(error, info) {
    this.setState({ didError: true })

    // Report to sentry
    reportError(error, info)
  }

  async componentDidMount() {
    try {
      await this.prepareState()

      // defer analytics to next cycle
      setTimeout(() => this.startAnalytics(), 0)
    } catch (err) {
      this.setState({ didError: true })
      reportError(err)
    }
  }

  startAnalytics = () => {
    const { address } = this.state
    const { type } = this.props
    const name =
      type === 'early' ? 'Early Voting Finder' : 'Polling Place Finder'
    const pageview = { name }

    if (address && address.state) {
      pageview.properties = {
        state: address.state
      }
    }

    trackPageview(pageview)
    listenForEvents()
  }

  onClickDirections = () => {
    const { address } = this.state
    const { state } = address

    trackEvent({
      name: 'Directions Clicked',
      properties: {
        state
      }
    })
  }

  prepareState = async () => {
    const address =
      this.props.address || getQueryAddress() || (await getEncryptedAddress())
    const voterInfo = await this.getVoterInfo({ address })

    // If we're getting linked here, set the address
    if (address && address._fromQuery) {
      // TODO: check if that's expected UX
    }

    if (address && !(voterInfo && voterInfo.address)) {
      console.log('polls.componentDidMount: found address but no voter info')
      this.setState({ address, ready: true })
    }

    if (window.localStorage.debug) {
      console.log('foundVoterInfo', voterInfo)
    }

    let shouldUseAutocomplete = true

    try {
      await loadGmaps()
    } catch (err) {
      shouldUseAutocomplete = false
      reportError(err)
    }

    try {
      const queryParams = this.props.queryParams || {
        election: this.props.electionDay || Boolean(getQueryParam('election'))
      }

      this.setState({
        address,
        voterInfo,
        queryParams,
        shouldUseAutocomplete,
        ready: true
      })
    } catch (err) {
      this.setState({ address, voterInfo, shouldUseAutocomplete, ready: true })
      reportError(err)
    }

    return
  }

  async getVoterInfo({ address }) {
    if (!address || !address.line1) {
      return null
    }

    const { alwaysUseNetwork } = this.props

    if (alwaysUseNetwork) {
      return await this.loadVoterInfo(address)
    }

    return await getEncryptedVoterInfo()
  }

  loadVoterInfo = async address => {
    const voterInfoData = await fetchVoterInfo({ address })
    const voterInfo = normalizeVoterInfo(voterInfoData)

    if (window.localStorage.debug) {
      console.log('loadedVoterInfo', voterInfo)
    }

    return voterInfo
  }

  onSelectAddress = async address => {
    setEncryptedAddress(address)

    const voterInfo = await this.loadVoterInfo(address)
    const { type, alwaysUseNetwork } = this.props

    if (alwaysUseNetwork) {
      setEncryptedVoterInfo(voterInfo)
    }

    this.setState({ address, voterInfo })

    const properties = {
      type,
      state: address.state
    }

    trackEvent({ name: 'Address Selected', properties })
  }

  onChangeAddress = () => {
    const address = null
    const voterInfo = null

    this.setState({ address, voterInfo })

    setEncryptedAddress(address)
    setEncryptedVoterInfo(voterInfo)

    const { type } = this.props

    trackEvent({ name: 'Address Changed', properties: { type } })
  }
}

PollingPlaceFinder.defaultProps = {
  alwaysUseNetwork: true
}

export default PollingPlaceFinder
