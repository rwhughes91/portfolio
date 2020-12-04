import React, { useRef, useCallback, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { debounce } from 'debounce'
import HomeScene from '@components/scenes/Home/HomeScene'
import AboutScene from '@components/scenes/About/AboutScene'
import ProjectsScene from '@components/scenes/Projects/ProjectsScene'
import ContactScene from '@components/scenes/Contact/ContactScene'
import IconContainer from '@components/IconContainer/IconContainer'
import SEO from '@components/SEO/SEO'

import { GetMetadataQuery } from '../../graphql-types'

const Home: React.FC<{ data: GetMetadataQuery }> = ({ data }) => {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null)
  const iconRef = useRef<HTMLDivElement | null>(null)
  const [showIcons, setShowIcons] = useState(false)

  const onScrollHandler = useCallback(() => {
    if (aboutSectionRef.current) {
      window.scrollTo({ left: 0, top: aboutSectionRef.current.offsetTop, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const onScrollWindowHandler = debounce(() => {
      if (
        aboutSectionRef.current &&
        window.pageYOffset >= aboutSectionRef.current.offsetTop / 2.5
      ) {
        setShowIcons(true)
      } else {
        setShowIcons(false)
      }
    }, 200)
    window.onscroll = onScrollWindowHandler
    return () => {
      onScrollWindowHandler.clear()
      window.onscroll = null
    }
  }, [])

  return (
    <>
      <SEO
        link={data.site?.siteMetadata?.link || ''}
        title={data.site?.siteMetadata?.title || ''}
        body="home"
      />
      <HomeScene onScrollHandler={onScrollHandler} />
      <AboutScene customRef={aboutSectionRef} />
      <ProjectsScene />
      <ContactScene customRef={iconRef} />
      <IconContainer onPress={onScrollHandler} hide={!showIcons} />
    </>
  )
}

export default Home

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
