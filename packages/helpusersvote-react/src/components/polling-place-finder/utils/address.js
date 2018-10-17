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

export default { toAddr }
