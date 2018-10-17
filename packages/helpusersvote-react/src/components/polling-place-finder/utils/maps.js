import CryptoJS from 'crypto-js'

const { HmacSHA1, enc } = CryptoJS

export const GMAPS_API_KEY = 'AIzaSyBq-ezGmXRaCYBUaUhBuxpXu-k_7uPkk_E'
const GMAPS_API_SIGNATURE_SECRET = 'efJgoMY8Zv5AJVJp6gVi7eIaoHs='

export function getMapImages(opts = {}) {
  const key = `&key=${GMAPS_API_KEY}`
  const { userAddr, pollAddr } = opts
  const markers = `&markers=icon:https://i.imgur.com/GyWhTdV.png%7C${userAddr}&markers=color:red%7C${pollAddr}`

  function signMapsURL(size) {
    const path = `/maps/api/staticmap?scale=2&${size}${markers}${key}&style=feature:poi|visibility:off`
    const signature = HmacSHA1(
      path,
      enc.Base64.parse(GMAPS_API_SIGNATURE_SECRET)
    )
      .toString(enc.Base64)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')

    return `https://maps.googleapis.com${path}` // &signature=${signature}`
  }

  return {
    small: signMapsURL(`size=370x200`),
    large: signMapsURL(`size=550x425`)
  }
}

export default {
  getMapImages
}
