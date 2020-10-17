import React from 'react'
import classes from './AboutScene.module.css'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Text from '@components/ui/Text/Text'
import ImageContainer from '@components/ui/ImageContainer/ImageContainer'
import { useStaticQuery, graphql } from 'gatsby'
import List from '@components/ui/List/List'

import { GetAboutUsDataQuery } from '../../../../graphql-types'

const AboutScreen: React.FC = () => {
  const data: GetAboutUsDataQuery = useStaticQuery(query)
  const techTags = data.allDataJson.nodes[0].languages!.concat(
    data.allDataJson.nodes[0].js!,
    data.allDataJson.nodes[0].server!,
    data.allDataJson.nodes[0].web!,
    data.allDataJson.nodes[0].databases!,
    data.allDataJson.nodes[0].tools!
  )
  return (
    <Section polygon>
      <Column customClassNames={classes.container}>
        <Text bold size="large" styles={{ marginBottom: '3rem' }}>
          About
        </Text>
        <Row customClassNames={classes.row}>
          <Column customClassNames={[classes.column, classes.pad].join(' ')}>
            <Text size="medium" bold customClassNames={classes.text}>
              {data.allDataJson.nodes[0].introduction as string}
            </Text>
            <Text
              size="medium"
              styles={{ marginTop: '3rem', marginBottom: '3rem' }}
              customClassNames={classes.text}
            >
              {data.allDataJson.nodes[0].header as string}
            </Text>
            <Text size="medium" customClassNames={classes.text}>
              {data.allDataJson.nodes[0].body as string}
            </Text>
            <Text
              size="medium"
              styles={{ marginTop: '3rem', marginBottom: '3rem' }}
              customClassNames={classes.text}
            >
              {data.allDataJson.nodes[0].footer as string}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column' }} className={classes.column}>
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
            styles={{
              alignSelf: 'stretch',
              width: '100%',
            }}
            customClassNames={[classes.column, classes.pad].join(' ')}
          >
            <div className={classes.imageContainer}>
              <ImageContainer />
            </div>
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
