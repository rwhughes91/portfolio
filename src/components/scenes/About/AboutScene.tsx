import React from 'react'
import classes from './AboutScene.module.css'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Text from '@components/ui/Text/Text'
import ImageContainer from '@components/ui/ImageContainer/ImageContainer'

const AboutScreen: React.FC = () => {
  return (
    <Section polygon>
      <Column customClassNames={classes.container}>
        <Text bold size="large" styles={{ marginBottom: '3rem' }}>
          About
        </Text>
        <Row customClassNames={classes.row}>
          <Column
            customClassNames={classes.column}
            styles={{
              justifyContent: 'center',
              width: '100%',
              padding: '0 3rem',
              marginBottom: '3rem',
            }}
          >
            <Text size="small" bold>
              Its' nice to meet you!
            </Text>
            <Text size="small" styles={{ marginTop: '3rem', marginBottom: '3rem' }}>
              I live in Sacramento, CA with my girlfriend and our cat.
            </Text>
            <Text size="small" customClassNames={classes.text}>
              I'm a perpetual learner and love all things related to web development; however, this
              wasn't always the case. I graduated from UC San Diego with majors in Economics and
              Neuroscience and shortly after graduation began working as an analyst at a biotech
              focused hedge fund. While I was incredibly thankful for this rare and unique
              opportunity, I wasn't passionate about my job. This led me to search for a career I
              would love and I'm proud to say it led me to full-stack web development.
            </Text>
            <Text size="small" styles={{ marginTop: '3rem', marginBottom: '3rem' }}>
              I also enjoy watching sports, going on hikes, and corgis!
            </Text>
            <Text size="small">Want to know more?</Text>
          </Column>
          <Column
            styles={{
              width: '100%',
              alignSelf: 'stretch',
              justifyContent: 'center',
              padding: '0 1rem',
            }}
          >
            <ImageContainer />
          </Column>
        </Row>
      </Column>
    </Section>
  )
}

export default React.memo(AboutScreen)
