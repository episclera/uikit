import React, { createContext } from 'react'

export const DeviceDetectContext = createContext({
  isMobile: null,
  isTablet: null,
  isDesktop: null,
})

const DeviceDetectProvider = ({ children, deviceContext }) => (
  <DeviceDetectContext.Provider value={deviceContext}>
    {children}
  </DeviceDetectContext.Provider>
)

export default DeviceDetectProvider
