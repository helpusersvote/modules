function get(key) {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key]
  } else if (typeof window !== 'undefined') {
    return window[key]
  } else {
    return ''
  }
}

export const CIVIC_INFO_API_KEY = get('CIVIC_INFO_API_KEY')
export const GMAPS_API_SIGNATURE_SECRET = get('GMAP_API_SIGNATURE_SECRET')
export const GMAPS_API_KEY = get('GMAPS_API_KEY')

export default {
  CIVIC_INFO_API_KEY,
  GMAPS_API_SIGNATURE_SECRET,
  GMAPS_API_KEY
}
