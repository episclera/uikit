import React from 'react'
import MobileDetect from 'mobile-detect'

const withMobileDetect = Component => {
  const WrappedComponent: React.FC = props => <Component {...props} />

  WrappedComponent.displayName = `withMobileDetect(${
    Component.displayName || Component.name || 'Component'
  })`

  WrappedComponent.getInitialProps = async rawContext => {
    const { req } = rawContext.ctx || rawContext

    const md = new MobileDetect(
      req ? req.headers['user-agent'] : window.navigator.userAgent,
    )

    const deviceContext = {
      isMobile: md.phone(),
      isTablet: md.tablet(),
      isDesktop: !md.phone() && !md.tablet(),
    }

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(rawContext)
    }

    return {
      ...pageProps,
      deviceContext,
    }
  }

  return WrappedComponent
}

export default withMobileDetect
