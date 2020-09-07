import React from 'react'
import { TUseCounter, CounterProps } from '@episclera/multipack-with-react'
import { TToNumber } from '@episclera/multipack-utils'

export interface Multipack {
  toNumber: TToNumber
  useCounter: TUseCounter
  Counter: React.FC<CounterProps>
}

// package exports
export const Counter: React.FC<CounterProps>
export const useCounter: TUseCounter
export const toNumber: TToNumber

declare const multipack: Multipack

export default multipack
