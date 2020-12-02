import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '@images/favicon.png'

interface Props {
  title: string
  link: string
  body: 'home' | 'contact'
}

const SEO: React.FC<Props> = ({ title, link, body }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Robbie's portfolio to get a sweet full-stack developer job"
      />
      <title>{title}</title>
      <link rel="canonical" href={link} />
      <link rel="icon" href={favicon} />
      <body className={body} />
    </Helmet>
  )
}

export default React.memo(SEO)
