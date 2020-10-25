import React from 'react'
import { UikitTailwindConfig } from '@episclera/uikit-tailwind-config'
import {
  DeviceDetectProviderProps,
  DeviceContext,
  TUseScreenSize,
  TWithMobileDetect,
  TIsBrowser,
} from '@episclera/uikit-utils'

export interface Uikit {
  // tailwind
  uikitTailwindConfig: UikitTailwindConfig
  // mobile detect
  DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
  DeviceDetectContext: React.Context<DeviceContext>
  useScreenSize: TUseScreenSize
  withMobileDetect: TWithMobileDetect
  // utils
  isBrowser: TIsBrowser
}

// package exports
// tailwind
export const uikitTailwindConfig: UikitTailwindConfig
// mobile detect
export const DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
export const DeviceDetectContext: React.Context<DeviceContext>
export const useScreenSize: TUseScreenSize
export const withMobileDetect: TWithMobileDetect
// utils
export const isBrowser: TIsBrowser

// main pack
declare const uikit: Uikit

export default uikit
