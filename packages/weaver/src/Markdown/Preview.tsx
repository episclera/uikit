import React from 'react'
import { Typography } from 'antd'
import MDPreview, { ReactMarkdownOptions } from 'react-markdown'
import { TMarkdownPreview } from '../../types'

/**
 * Markdown preview component
 */
const MarkdownPreview: TMarkdownPreview = ({
  children,
  ...rest
}: ReactMarkdownOptions) => (
  <MDPreview
    allowedElements={[
      'p',
      'strong',
      'em',
      'a',
      'blockquote',
      /**
       * allowing both list types "ol" and "ul" to avoid situations when numbered/ordered lists will be removed
       */
      'ol',
      'ul',
      /**
       * "li" is allowed because is used as children in "ol" and "ul"
       */
      'li',
    ]}
    components={{
      p: Typography.Paragraph,
      strong: props => <Typography.Text strong {...props} />,
      em: props => <Typography.Text italic {...props} />,
      a: props => <Typography.Link target='_blank' {...props} />,
      blockquote: props => <Typography.Text italic {...props} />,
      ol: props => <Typography.Text {...props} />,
      ul: props => <Typography.Text {...props} />,
    }}
    /**
     * This props is needed for security considerations to not allow users to inject
     * insecure content
     */
    skipHtml
    /**
     * Using classnames for identification because data-testid is not supported by MDEditor
     */
    className='markdown-preview'
    {...rest}
  >
    {children}
  </MDPreview>
)

export default MarkdownPreview
