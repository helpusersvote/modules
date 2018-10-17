import React, { Component } from 'react'
import Button from './button'

const addressFields = ['line1', 'city', 'state', 'zip']
const FIELD_PLACEHOLDERS = {
  line1: 'Street Address',
  city: 'City',
  state: 'State',
  zip: 'Zip Code'
}

class AddressForm extends Component {
  render() {
    const { onSubmit, onChange, state, props } = this
    const { title, description } = props

    return (
      <form onSubmit={onSubmit} className="address-form w-100 mt3 mt4-ns">
        <div className="heading-container">
          <h1 className="heading">{title}</h1>
        </div>
        <div className="address-form-content">
          <div className="mt1 mb3 f6 f5-ns">{description}</div>
          <div className="flex flex-wrap">
            {addressFields.map((field, index) => (
              <div
                key={field}
                className={`w-100 w-50-ns ${
                  index % 2 === 0 ? 'pr3-ns' : ''
                } pb3 border-box`}
              >
                <input
                  required
                  type="text"
                  name={field}
                  value={state[field]}
                  onChange={onChange(field)}
                  className="mw-100 w-100  f5 input-reset ba b--black-20 pa2 border-box br1"
                  placeholder={FIELD_PLACEHOLDERS[field]}
                />
              </div>
            ))}
          </div>
          <div className="mt3 flex justify-center">
            <Button
              is="button"
              width={100}
              display="block"
              textAlign="center"
              appearance="blue"
              onClick={onSubmit}
            >
              Go!
            </Button>
          </div>
        </div>
      </form>
    )
  }

  state = {
    line1: '',
    city: '',
    state: '',
    zip: ''
  }

  onChange = key => e => this.setState({ [key]: e.target.value })

  onSubmit = e => {
    if (e.preventDefault) e.preventDefault()

    const address = addressFields.reduce((acc, field) => {
      acc[field] = this.state[field]
      return acc
    }, {})
    const invalid =
      Object.values(address).filter(s => !s || s.length < 2).length > 0 // Confirm the input value is real

    if (invalid) {
      // display notice
      return
    }

    this.props.onSelectAddress(address)
  }
}

AddressForm.defaultProps = {
  onSelectAddress: () =>
    console.warn('Missing `onSubmit` for `<AddressForm />`'),
  title: 'Find your polling place',
  description:
    'We’ll find your polling place and hours, so you can go vote on Election Day!'
}

export default AddressForm
