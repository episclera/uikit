/* istanbul ignore file */
import { toNumber } from '@episclera/multipack-utils'
import { Counter, useCounter } from '@episclera/multipack-with-react'
import { Multipack } from '../types'

const multipack: Multipack = {
  toNumber,
  useCounter,
  Counter,
}

export { toNumber, useCounter, Counter }
export default multipack
