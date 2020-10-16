import React from 'react'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Text from '@components/ui/Text/Text'

const HomeScreen: React.FC = () => {
  return (
    <Section polygon>
      <Column styles={{ alignItems: 'center' }}>
        <Text bold size="large">
          About
        </Text>
        <Row>To Add</Row>
      </Column>
    </Section>
  )
}

export default React.memo(HomeScreen)
