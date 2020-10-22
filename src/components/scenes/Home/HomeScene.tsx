import React from 'react'
import classes from './HomeScene.module.css'
import Section from '@components/Section/Section'
import Header from '@components/ui/Header/Header'
import ScrollWidget from '@components/ScrollWidget/ScrollWidget'
import Button from '@components/ui/Button/Button'
import Column from '@components/Layout/Column/Column'

interface Props {
  onScrollHandler: () => void
}

const HomeScreen: React.FC<Props> = ({ onScrollHandler }) => {
  return (
    <Section
      styles={{ backgroundColor: 'var(--dark-blue-2)', position: 'relative', zIndex: 100 }}
      fill
    >
      <div className={classes.homeScene}>
        <Column customClassNames={classes.headers}>
          <Header>Hi, I'm Robbie Hughes.</Header>
          <Header>I'm a full-stack web developer.</Header>
          <div className={classes.button}>
            <Button size="large" onPress={onScrollHandler}>
              View my work
            </Button>
          </div>
        </Column>
        <div className={classes.scrollWidget}>
          <ScrollWidget />
        </div>
      </div>
    </Section>
  )
}

export default React.memo(HomeScreen)
