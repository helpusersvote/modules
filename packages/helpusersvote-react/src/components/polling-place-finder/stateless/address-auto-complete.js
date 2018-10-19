import _ from 'lodash'
import cx from 'classnames'
import React, { Component } from 'react'
import { fetchAutocompletePlaces, placeToAddress, toAddr } from '../utils'

export class AddressAutoComplete extends Component {
  state = { activeIndex: -1, inputValue: '', places: [] }

  onInputChange = e => {
    const inputValue = e.target.value

    this.setState({ inputValue })

    fetchAutocompletePlaces({ input: inputValue }).then(places => {
      if (!places || places.length === 0) {
        this.setState({
          activeIndex: 0,
          places: [
            {
              onClick: this.props.onToggleAutocomplete,
              description: 'No addresses found. Switch to simple address form →'
            }
          ]
        })

        return
      }

      this.setState({
        activeIndex: 0,
        places
      })
    })

    return inputValue
  }

  onSelect = place => {
    const address = placeToAddress(place)
    const inputValue = toAddr(address)

    this.setState({ inputValue, places: [] })

    if (this.props.onChange) {
      this.props.onChange(address)
    }
  }

  onClear = () => this.setState({ places: [] })

  onKeyDown = e => {
    const { places, activeIndex } = this.state

    // Skip handler if there are no places available
    if (!places || !places.length) {
      return
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        this.onClear()
        return false
      case 'Enter':
        e.preventDefault()
        if (places[activeIndex]) {
          if (places[activeIndex].onClick) {
            places[activeIndex].onClick()
          } else {
            this.onSelect(places[activeIndex])
          }
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        this.setState({ activeIndex: activeIndex - 1 || 0 })
        break
      case 'ArrowDown':
        e.preventDefault()
        this.setState({
          activeIndex: Math.min(activeIndex + 1, places.length - 1)
        })
        break
    }
  }

  render() {
    const { activeIndex, inputValue, places } = this.state

    return (
      <div className="w-100">
        <input
          required
          type="text"
          value={inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.onKeyDown}
          placeholder="Enter your home address"
          className="mw-100 w-100 f4-ns f5 input-reset ba b--black-20 pa2 border-box br1"
        />
        <Options
          list={places}
          inputValue={inputValue}
          onSelect={this.onSelect}
          activeIndex={activeIndex}
        />
      </div>
    )
  }
}

function Options({ list, onSelect, activeIndex }) {
  return (
    <div className="huv-autocomplete-options mt2 huv-shadow br2">
      {list.map((item, index) => (
        <div
          key={index}
          onClick={() => (item.onClick ? item.onClick() : onSelect(item))}
          className={cx(
            'huv-autocomplete-option pa2 f5 bb b--black-10 pointer',
            activeIndex === index && 'huv-autocomplete-option--active'
          )}
        >
          {toAutocompleteOptionLabel(item)}
        </div>
      ))}
    </div>
  )
}

function toAutocompleteOptionLabel(item) {
  const description = _.get(item, 'description') || ''

  return description.replace(', USA', '')
}

export default AddressAutoComplete
