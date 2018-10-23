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

/**
 * Parse single-line address string.
 *
 * @param {String}
 * @return {Object}
 */

export function fromAddr(str = '') {
  const parts = str.replace(', USA', '').split(', ')
  const lastPart = parts.splice(parts.length - 1, 1) || ['']
  const lastParts = lastPart[0].split(' ')
  const [state, zip] = lastParts

  return {
    line1: parts[0] || '',
    city: parts[1] || '',
    state,
    zip
  }
}

export default { fromAddr, toAddr, placeToAddress }
