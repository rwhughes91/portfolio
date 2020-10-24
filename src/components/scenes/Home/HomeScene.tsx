import React from 'react'
import classes from './HomeScene.module.css'
import Section from '@components/Section/Section'
import Header from '@components/ui/Header/Header'
import ScrollWidget from '@components/ScrollWidget/ScrollWidget'
import Button from '@components/ui/Button/Button'
import Column from '@components/Layout/Column/Column'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

interface Props {
  onScrollHandler: () => void
}

const HomeScreen: React.FC<Props> = ({ onScrollHandler }) => {
  const data = useStaticQuery(backgroundQuery)
  const bgImage = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={bgImage}
      backgroundColor="var(--dark-blue-2)"
      style={{ zIndex: 100 }}
    >
      <Section
        styles={{ backgroundColor: 'rgba(19, 44, 68, .50)', position: 'relative', zIndex: 101 }}
        fill
      >
        <div className={classes.homeScene}>
          <Column customClassNames={classes.headers}>
            <Header>Hi, I&apos;m Robbie Hughes.</Header>
            <Header>I&apos;m a full-stack web developer.</Header>
            <div className={classes.button}>
              <Button size="medium" onPress={onScrollHandler}>
                View my work
              </Button>
            </div>
          </Column>
          <div className={classes.scrollWidget}>
            <ScrollWidget />
          </div>
        </div>
      </Section>
    </BackgroundImage>
  )
}

export default React.memo(HomeScreen)

const backgroundQuery = graphql`
  query BackgroundQuery {
    file(relativePath: { eq: "background.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920, background: "#051e34") {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
