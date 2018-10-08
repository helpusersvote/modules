import * as countdown from './countdown'
import * as cta from './call-to-action'
import * as data from './data'

export * from './data'
export * from './countdown'
export * from './call-to-action'

export default {
  ...countdown,
  ...data,
  ...cta
}
