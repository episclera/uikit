import React from 'react'
import { TContainer, ContainerProps } from '../types'

const Container: TContainer = ({ children, className }: ContainerProps) => (
  <div className={`container ${className}`} data-testid='container'>
    {children}
  </div>
)

Container.defaultProps = {
  className: '',
}

export default Container
