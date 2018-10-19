import React, { Component } from 'react'
import PollingPlaceFinderError from './stateless/polling-place-finder-error'
import PollingPlaceDirections from './polling-place-directions'
import EarlyVotingDirections from './early-voting-directions'
import AddressForm from './stateless/address-form'
import {
  loadGmaps,
  fetchVoterInfo,
  normalizeVoterInfo,
  getEncryptedAddress,
  setEncryptedAddress,
  getEncryptedVoterInfo,
  setEncryptedVoterInfo
} from './utils'

class PollingPlaceFinder extends Component {
  render() {
    const { onSelectAddress, onChangeAddress } = this
    const { type, children } = this.props
    const {
      ready,
      address,
      voterInfo,
      queryParams,
      didError,
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

    let content

    if (!(address && address.line1 && voterInfo && voterInfo.locations)) {
      content = (
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
          />
        )
      } else {
        content = (
          <PollingPlaceDirections
            address={address}
            voterInfo={voterInfo}
            queryParams={queryParams}
            onChangeAddress={onChangeAddress}
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
    // Report to Sentry
    console.log('huv.componentDidCatch', { error, info })
    this.setState({ didError: true })
  }

  async componentDidMount() {
    try {
      await this.prepareState()
    } catch (err) {
      console.error(err)
      this.setState({ didError: true })
    }
  }

  prepareState = async () => {
    const address = await getEncryptedAddress()
    const voterInfo = await this.getVoterInfo({ address })

    if (address && !(voterInfo && voterInfo.normalizedInput)) {
      console.log('polls.componentDidMount: found address but no voter info')
      this.setState({ address, ready: true })
    }

    if (window.localStorage.debug) {
      console.log('v', voterInfo)
    }

    let shouldUseAutocomplete = true

    try {
      await loadGmaps()
    } catch (err) {
      console.error(err)
      shouldUseAutocomplete = false
    }

    try {
      const s = new URLSearchParams(window.location.search)
      const queryParams = {
        election: this.props.electionDay || s.get('election') !== null
      }

      this.setState({
        address,
        voterInfo,
        queryParams,
        shouldUseAutocomplete,
        ready: true
      })
    } catch (err) {
      console.error(err)
      this.setState({ address, voterInfo, shouldUseAutocomplete, ready: true })
    }

    return
  }

  async getVoterInfo({ address }) {
    if (!address || !address.line1) {
      return null
    }

    const { alwaysUseNetwork = true } = this.props

    if (alwaysUseNetwork) {
      return await this.loadVoterInfo(address)
    }

    return await getEncryptedVoterInfo()
  }

  loadVoterInfo = async address => {
    const voterInfoData = await fetchVoterInfo({ address })
    const voterInfo = normalizeVoterInfo(voterInfoData)

    if (window.localStorage.debug) {
      console.log('v', voterInfo)
    }

    return voterInfo
  }

  onSelectAddress = async address => {
    setEncryptedAddress(address)

    const voterInfo = await this.loadVoterInfo(address)

    setEncryptedVoterInfo(voterInfo)
    this.setState({ address, voterInfo })
  }

  onChangeAddress = () => {
    const address = null
    const voterInfo = null

    this.setState({ address, voterInfo })

    setEncryptedAddress(address)
    setEncryptedVoterInfo(voterInfo)
  }
}

export default PollingPlaceFinder
