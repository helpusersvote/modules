// import CryptoJS from 'crypto-js'
import { GMAPS_API_KEY, GMAPS_API_SIGNATURE_SECRET } from './settings'

// const { HmacSHA1, enc } = CryptoJS

export function getMapImages(opts = {}) {
  const key = `&key=${GMAPS_API_KEY}`
  const { userAddr, pollAddr } = opts
  const markers = `&markers=icon:https://i.imgur.com/GyWhTdV.png%7C${userAddr}&markers=color:red%7C${pollAddr}`

  function signMapsURL(size) {
    const path = `/maps/api/staticmap?scale=2&${size}${markers}${key}&style=feature:poi|visibility:off`
    const pathParts = [path]

    if (GMAPS_API_SIGNATURE_SECRET) {
      // Only necessary when using Google Maps Credits (business plan)
      //
      // const signature = HmacSHA1(
      //   path,
      //   enc.Base64.parse(GMAPS_API_SIGNATURE_SECRET)
      // )
      //   .toString(enc.Base64)
      //   .replace(/\+/g, '-')
      //   .replace(/\//g, '_')
      // path.push(`signature=${signature}`)
    }

    return `https://maps.googleapis.com${pathParts.join('&')}`
  }

  return {
    small: signMapsURL(`size=370x200`),
    large: signMapsURL(`size=550x425`)
  }
}

export default {
  getMapImages
}
