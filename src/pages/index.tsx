import React, { useRef, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import HomeScene from '@components/scenes/Home/HomeScene'
import AboutScene from '@components/scenes/About/AboutScene'
import ProjectsScene from '@components/scenes/Projects/ProjectsScene'
import ContactScene from '@components/scenes/Contact/ContactScene'

import { GetMetadataQuery } from '../../graphql-types'

const home: React.FC<{ data: GetMetadataQuery }> = ({ data }) => {
  const aboutSectionRef = useRef<HTMLDivElement>(null)

  const onScrollHandler = useCallback(() => {
    if (aboutSectionRef.current) {
      window.scrollTo(0, aboutSectionRef.current.offsetTop)
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site?.siteMetadata?.title}</title>
        {data.site?.siteMetadata?.link && (
          <link rel="canonical" href={data.site?.siteMetadata?.link} />
        )}
      </Helmet>
      <HomeScene onScrollHandler={onScrollHandler} />
      <AboutScene customRef={aboutSectionRef} />
      <ProjectsScene />
      <ContactScene />
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
