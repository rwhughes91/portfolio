import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import classes from './AboutScene.module.css'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Text from '@components/ui/Text/Text'
import ImageContainer from '@components/ui/ImageContainer/ImageContainer'
import List from '@components/ui/List/List'
import HeaderText from '@components/ui/HeaderText/HeaderText'
import { useInView } from 'react-intersection-observer'

import { GetAboutUsDataQuery } from '../../../../graphql-types'

interface Props {
  customRef?: React.MutableRefObject<HTMLDivElement | null>
}

const AboutScreen: React.FC<Props> = ({ customRef }) => {
  const { ref: textRef, inView: inViewText } = useInView({ threshold: 0.85, triggerOnce: true })
  const { ref: introRef, inView: inViewIntro } = useInView({ threshold: 1, triggerOnce: true })
  const { ref: textRefTech, inView: inViewTextTech } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })

  const data: GetAboutUsDataQuery = useStaticQuery(query)

  const techTags = data.allDataJson.nodes[0].languages!.concat(
    data.allDataJson.nodes[0].js as string[],
    data.allDataJson.nodes[0].server as string[],
    data.allDataJson.nodes[0].web as string[],
    data.allDataJson.nodes[0].databases as string[],
    data.allDataJson.nodes[0].tools as string[]
  )

  return (
    <Section polygon pad customRef={customRef}>
      <Column customClassNames={classes.container}>
        <HeaderText>About</HeaderText>
        <Row customClassNames={classes.row}>
          <Column customClassNames={[classes.column, classes.pad].join(' ')}>
            <Text
              size="medium"
              bold
              customClassNames={[classes.text, inViewIntro ? classes.viewLeft : classes.hide].join(
                ' '
              )}
              customRef={introRef}
            >
              {data.allDataJson.nodes[0].introduction as string}
            </Text>
            <div
              ref={textRef}
              className={[classes.column, inViewText ? classes.viewLeft : classes.hide].join(' ')}
            >
              <Text
                size="medium"
                customClassNames={[classes.text, classes.marginVertical].join(' ')}
              >
                {data.allDataJson.nodes[0].header as string}
              </Text>
              <Text size="medium" customClassNames={classes.text}>
                {data.allDataJson.nodes[0].body as string}
              </Text>
              <Text
                size="medium"
                customClassNames={[classes.text, classes.marginVertical].join(' ')}
              >
                {data.allDataJson.nodes[0].footer as string}
              </Text>
            </div>
            <div
              className={[classes.column, inViewTextTech ? classes.viewLeft : classes.hide].join(
                ' '
              )}
              ref={textRefTech}
            >
              <Text
                size="medium"
                bold
                styles={{ marginBottom: '.5rem' }}
                customClassNames={classes.text}
              >
                Tech I use:
              </Text>
              <List items={techTags as string[]} />
            </div>
          </Column>
          <Column
            customClassNames={[classes.column, classes.padImage, classes.imageColumn].join(' ')}
          >
            <ImageContainer collage />
          </Column>
        </Row>
      </Column>
    </Section>
  )
}

export default React.memo(AboutScreen)

const query = graphql`
  query getAboutUsData {
    allDataJson {
      nodes {
        introduction
        header
        body
        footer
        languages
        js
        server
        web
        databases
        tools
      }
    }
  }
`
