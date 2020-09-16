import React, { createContext } from 'react'
import { DeviceContext, DeviceDetectProviderProps } from '../../types'

export const DeviceDetectContext: React.Context<DeviceContext> = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
})

const DeviceDetectProvider: React.FC<DeviceDetectProviderProps> = ({
  children,
  deviceContext,
}) => (
  <DeviceDetectContext.Provider value={deviceContext}>
    {children}
  </DeviceDetectContext.Provider>
)

export default DeviceDetectProvider
