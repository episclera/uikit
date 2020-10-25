/* istanbul ignore file */
import uikitTailwindConfig from '@episclera/uikit-tailwind-config'
import {
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  isBrowser,
} from '@episclera/uikit-utils'
import { Uikit } from '../types'

const uikit: Uikit = {
  // tailwind
  uikitTailwindConfig,
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export {
  // tailwind
  uikitTailwindConfig,
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export default uikit
