import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import { TMarkdownEditor } from '../../types'

/**
 * Markdown wysiwyg editor
 */
const Editor: TMarkdownEditor = ({ children, ...rest }: TextAreaProps) => (
  <Input.TextArea
    data-testid='markdown-editor-textarea'
    showCount
    rows={4}
    {...rest}
  />
)

export default Editor
