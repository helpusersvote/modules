import React, { Component } from 'react'
import PollingPlaceDirections from './polling-place-directions'
import EarlyVotingDirections from './early-voting-directions'
import AddressForm from './stateless/address-form'
import {
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
    const { ready, address, voterInfo, queryParams } = this.state
    const { type } = this.props

    if (!ready) {
      return <div className="huv-container" />
    }

    let content

    if (!(address && address.line1 && voterInfo && voterInfo.locations)) {
      content = <AddressForm onSelectAddress={onSelectAddress} />
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

    return <div className="huv-container">{content}</div>
  }

  state = {
    queryParams: {},
    ready: false,
    address: {}
  }

  async componentDidMount() {
    const address = await getEncryptedAddress()
    const voterInfo = await this.getVoterInfo({ address })

    if (address && !voterInfo) {
      console.log('polls.componentDidMount: found address but no voter info')
    }

    if (window.localStorage.debug) {
      console.log('v', voterInfo)
    }

    try {
      const s = new URLSearchParams(window.location.search)
      const queryParams = {
        election: s.get('election') !== null
      }

      this.setState({ address, voterInfo, queryParams, ready: true })
    } catch (err) {
      console.error('e', err)
      this.setState({ address, voterInfo, ready: true })
    }
  }

  async getVoterInfo({ address }) {
    if (!address || !address.line1) {
      return null
    }

    const { alwaysUseNetwork = false } = this.props

    if (alwaysUseNetwork) {
      return await this.loadVoterInfo({ address })
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
