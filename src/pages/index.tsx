import React, { useRef, useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { debounce } from 'debounce'
import HomeScene from '@components/scenes/Home/HomeScene'
import AboutScene from '@components/scenes/About/AboutScene'
import ProjectsScene from '@components/scenes/Projects/ProjectsScene'
import ContactScene from '@components/scenes/Contact/ContactScene'
import IconContainer from '@components/IconContainer/IconContainer'
import ContactForm from '@components/ContactForm/ContactForm'

import favicon from '@images/favicon.png'

import { GetMetadataQuery } from '../../graphql-types'

const Home: React.FC<{ data: GetMetadataQuery }> = ({ data }) => {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null)
  const iconRef = useRef<HTMLDivElement | null>(null)
  const [showArrowIcon, setShowArrowIcon] = useState(false)
  const [showIcons, setShowIcons] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const onScrollHandler = useCallback(() => {
    if (aboutSectionRef.current) {
      window.scrollTo({ left: 0, top: aboutSectionRef.current.offsetTop, behavior: 'smooth' })
    }
  }, [])

  const toggleShowForm = useCallback(() => {
    setShowForm(prevState => !prevState)
  }, [])

  useEffect(() => {
    const onScrollWindowHandler = debounce(() => {
      if (iconRef.current && iconRef.current.getBoundingClientRect().top <= window.innerHeight) {
        setShowArrowIcon(true)
      } else {
        setShowArrowIcon(false)
      }
      if (aboutSectionRef.current && window.pageYOffset >= aboutSectionRef.current.offsetTop / 2.5) {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site?.siteMetadata?.title}</title>
        {data.site?.siteMetadata?.link && (
          <link rel="canonical" href={data.site?.siteMetadata?.link} />
        )}
        <link rel="icon" href={favicon} />
      </Helmet>
      <HomeScene onScrollHandler={onScrollHandler} />
      <AboutScene customRef={aboutSectionRef} />
      <ProjectsScene />
      <ContactScene customRef={iconRef} onPress={toggleShowForm} />
      <IconContainer arrow={showArrowIcon} onPress={onScrollHandler} hide={!showIcons} />
      <ContactForm onPress={toggleShowForm} show={showForm} />
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
