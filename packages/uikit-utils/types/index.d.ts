// mobile detect

export interface DeviceContext {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export interface DeviceDetectProviderProps {
  deviceContext: DeviceContext
}

export interface UseScreenSize {
  isXsScreenSize: boolean
  isSmScreenSize: boolean
  isMdScreenSize: boolean
  isLgScreenSize: boolean
  isXlScreenSize: boolean
  isXxlScreenSize: boolean
}

export type TUseScreenSize = () => UseScreenSize

// main pack
export interface UikitUtils {
  DeviceDetectProvider: DeviceDetectProviderProps
}

// package exports
export const DeviceDetectProvider: DeviceDetectProviderProps

declare const uikitUtils: UikitUtils

export default uikitUtils
