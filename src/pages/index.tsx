import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { GetMetadataQuery } from '../../graphql-types'

const home: React.FC<{ data: GetMetadataQuery }> = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site?.siteMetadata?.title}</title>
        {data.site?.siteMetadata?.link && (
          <link rel="canonical" href={data.site?.siteMetadata?.link} />
        )}
      </Helmet>
      <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
        <h2>gatsby-background-image</h2>
      </div>
      <div style={{ backgroundColor: 'blue', width: '100%', height: '50rem' }}></div>
    </>
  )
}

export default home

export const query = graphql`
  query getMetadata {
    site {
      siteMetadata {
        title
        link
      }
    }
  }
`
