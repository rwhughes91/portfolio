import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '@components/Layout/Layout'

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
      <Layout />
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
