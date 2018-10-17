import React from 'react'

export function LocationAddress({ address, ...props }) {
  return address.line1 ? (
    <div {...props}>
      <div className="fw6">{address.line1}</div>
      <div>
        {address.city}, {address.state} {address.zip}
      </div>
    </div>
  ) : null
}

LocationAddress.defaultProps = {
  address: {}
}

export default LocationAddress
