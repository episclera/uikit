import * as AntdComponents from 'antd'
import * as WeaverIcons from '@episclera/weaver-icons'
import * as WeaverUtils from '@episclera/weaver-utils'
import Container from './Container'
import Row from './Row'

const weaver = {
  ...AntdComponents,
  Container,
  Row,
  ...WeaverIcons,
  ...WeaverUtils,
}

export * from 'antd'
export { default as Container } from './Container'
export { default as Row } from './Row'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'

export default weaver
