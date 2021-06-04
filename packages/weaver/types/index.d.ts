import { RowProps } from 'antd'
import React, { ReactChild } from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactChild
  className?: string
}

export type TContainer = React.FC<ContainerProps>

export type TRow = React.FC<RowProps>

// export packages
export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'

export const Container: TContainer
export const Row: TRow
