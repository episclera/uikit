export interface WeaverUnFlattenConfig {
  [key: string]: string
}

export interface WeaverThemeConfig {
  colors: WeaverUnFlattenConfig
  shadow: WeaverUnFlattenConfig
  'border-radius': WeaverUnFlattenConfig
  screens: WeaverUnFlattenConfig
}

export type TWeaverTheme = (val?: string) => string | WeaverThemeConfig

export interface WeaverThemePluginLess {
  install: (
    less: any,
    pluginManager: any,
    functions: {
      add: (name: string, pluginMethod: (val?: string) => string) => any
    },
  ) => void
}

// package exports
export const weaverThemeConfig: WeaverThemeConfig
export const weaverTheme: TWeaverTheme
// main pack
declare const weaverThemePluginLess: WeaverThemePluginLess

export default weaverThemePluginLess
