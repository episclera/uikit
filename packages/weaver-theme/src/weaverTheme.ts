import { TWeaverTheme, WeaverUnFlattenConfig } from '../types'
import weaverThemeConfig from './weaverThemeConfig'

const weaverTheme: TWeaverTheme = arg => {
  const unFlattenConfig = Object.values(weaverThemeConfig).reduce(
    (acc: WeaverUnFlattenConfig, nextVal: WeaverUnFlattenConfig) => ({
      ...acc,
      ...nextVal,
    }),
    {},
  ) as WeaverUnFlattenConfig

  if (arg) {
    return unFlattenConfig[arg]
  }

  return weaverThemeConfig
}

export default weaverTheme
