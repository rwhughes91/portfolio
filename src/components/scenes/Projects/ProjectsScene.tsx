import React from 'react'
import classes from './ProjectsScene.module.css'
import Section from '@components/Section/Section'
import Text from '@components/ui/Text/Text'
import Column from '@components/Layout/Column/Column'

const ProjectsScene: React.FC = () => {
  return (
    <Section styles={{ backgroundColor: 'var(--light-gray-1)' }}>
      <Column>
        <Text bold size="large" styles={{ marginBottom: '3rem' }}>
          Recent Projects
        </Text>
      </Column>
    </Section>
  )
}

export default React.memo(ProjectsScene)
