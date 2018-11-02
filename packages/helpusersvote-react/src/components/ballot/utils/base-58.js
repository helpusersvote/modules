import baseX from 'base-x'

const base58 = baseX(
  '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
)

export function stringify(wordArray) {
  return base58.encode(wordArray.words.join()).toString('hex')
}

export function parse(str) {
  return base58.decode(str)
}

export default { stringify, parse }
