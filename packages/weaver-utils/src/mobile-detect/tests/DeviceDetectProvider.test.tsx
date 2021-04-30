import React from 'react'
import { act, render } from '@testing-library/react'
import { weaverTheme } from '@episclera/weaver-theme'
import DeviceDetectProvider from '../DeviceDetectProvider'
import useScreenSize from '../useScreenSize'
import { DeviceContext } from '../../../types'

let mocKProps = {}

beforeEach(() => {
  mocKProps = {
    deviceContext: {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    },
  }
})

describe('DeviceDetectProvider', () => {
  it('should provide device context and re-provide this context with new values when window is resized', () => {
    let isGuessedScreenSizeXs = false
    const Component: React.FC = () => {
      const { isXsScreenSize } = useScreenSize()
      isGuessedScreenSizeXs = isXsScreenSize
      return <div />
    }

    render(
      <DeviceDetectProvider
        {...(mocKProps as { deviceContext: DeviceContext })}
      >
        <Component />
      </DeviceDetectProvider>,
    )

    expect(isGuessedScreenSizeXs).toBeFalsy()

    act(() => {
      // set size to extra small mobile one
      global.innerWidth = Number(
        `${weaverTheme('screen-xs')}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(isGuessedScreenSizeXs).toBeTruthy()
  })
})
