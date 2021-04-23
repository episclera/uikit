import weaverTheme from '../weaverTheme'

describe('weaverTheme', () => {
  it('Should return only one property value if the arg is provided', () => {
    expect(typeof weaverTheme('primary-color')).toBe('string')
  })
  it('Should return the entire config if no args provided', () => {
    expect(typeof weaverTheme()).toBe('object')
  })
})
