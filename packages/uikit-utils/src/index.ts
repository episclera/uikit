/* istanbul ignore file */
import DeviceDetectProvider, {
  DeviceDetectContext,
} from './mobile-detect/DeviceDetectProvider'
import useScreenSize from './mobile-detect/useScreenSize'
import withMobileDetect from './mobile-detect/withMobileDetect'
import themeConfig from './themeConfig'
import isBrowser from './isBrowser'
import { UikitUtils } from '../types'

const uikitUtils: UikitUtils = {
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // tailwind
  themeConfig,
  // utils
  isBrowser,
}

export {
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // tailwind
  themeConfig,
  // utils
  isBrowser,
}

export default uikitUtils
