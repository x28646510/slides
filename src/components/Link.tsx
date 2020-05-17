import React from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    sx={{ color: '#08f', textDecoration: 'none', my: '20px' }}
  >
    {children ?? href}
  </a>
)
