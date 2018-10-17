function get(key) {
  if (typeof process !== 'undefined' && process.env) {
    if (process.env[key]) return process.env[key]
  }

  if (typeof window !== 'undefined') {
    if (window[key]) return window[key]
  }

  return ''
}

export const CIVIC_INFO_API_KEY = get('CIVIC_INFO_API_KEY')
export const GMAPS_API_SIGNATURE_SECRET = get('GMAP_API_SIGNATURE_SECRET')
export const GMAPS_API_KEY = get('GMAPS_API_KEY')

export default {
  CIVIC_INFO_API_KEY,
  GMAPS_API_SIGNATURE_SECRET,
  GMAPS_API_KEY
}
