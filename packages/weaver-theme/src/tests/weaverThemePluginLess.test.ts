import weaverThemePluginLess from '../weaverThemePluginLess'

describe('weaverThemePluginLess', () => {
  it('Should call function add and register weaverTheme plugin', () => {
    const add = jest.fn()
    weaverThemePluginLess.install(undefined, undefined, { add })
    expect(add).toBeCalledTimes(1)
  })
})
