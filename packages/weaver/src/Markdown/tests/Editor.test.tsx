import React from 'react'
import { render } from '@testing-library/react'
import Editor from '../Editor'

describe('Editor', () => {
  it('Should render the textarea input', () => {
    const { getByTestId } = render(<Editor />)

    expect(getByTestId('markdown-editor-textarea')).toBeTruthy()
  })
})
