/* istanbul ignore file */
import weaverTheme from './weaverTheme'
import weaverThemePluginLess from './weaverThemePluginLess'

// Note: This export workaround is used because by default should be exported only less plugin to be able to use it in less files ...but I also need weaverTheme and I'm injecting it to be accessible
/* istanbul ignore next */
const weaverThemeGlobal = {
  weaverTheme,
  ...weaverThemePluginLess,
}
/* istanbul ignore next */
export default weaverThemeGlobal
