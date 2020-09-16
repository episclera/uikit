// mobile detect

export interface DeviceContext {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export interface DeviceDetectProviderProps {
  deviceContext: React.Context<DeviceContext>
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
  DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
  DeviceDetectContext: React.Context<DeviceContext>
}

// package exports
export const DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
export const DeviceDetectContext: React.Context<DeviceContext>

declare const uikitUtils: UikitUtils

export default uikitUtils
