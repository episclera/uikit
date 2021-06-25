import Markdown from '../index'

describe('Markdown', () => {
  it('should correctly export sub-modules', () => {
    expect(Markdown.Editor).toBeTruthy()
    expect(Markdown.Preview).toBeTruthy()
  })
})
