/**
 * Render single-line address string.
 *
 * @param {Object} address
 * @return {String}
 */

export function toAddr(address) {
  const { line1 = '', city = '', state = '', zip = '' } = address
  const addr = [line1, city, state].filter(Boolean).join(', ')

  return [addr, zip].filter(Boolean).join(' ')
}

/**
 * Convert Google Maps `Place` object to an address object
 *
 * @param {Object} place
 * @return {Object}
 */

export function placeToAddress(place) {
  const address = {}
  const formattedPlace = place.structured_formatting || {}

  address.line1 = formattedPlace.main_text || ''

  const restOfAddress = formattedPlace.secondary_text || ''
  const restParts = restOfAddress.split(', ').filter(t => t !== 'USA')

  // Examples:
  // - Santa Cruz, CA, USA
  restParts.forEach(value => {
    if (!address.city) {
      address.city = value
    } else if (!address.state) {
      address.state = value
    }
  })

  return address
}

export default { toAddr, placeToAddress }
