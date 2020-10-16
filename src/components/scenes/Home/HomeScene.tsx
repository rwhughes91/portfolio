import React from 'react'
import classes from './HomeScene.module.css'
import Section from '@components/Section/Section'
import Header from '@components/ui/Header/Header'
import ScrollWidget from '@components/ScrollWidget/ScrollWidget'

const HomeScreen: React.FC = () => {
  return (
    <Section styles={{ backgroundColor: 'var(--dark-blue-2)' }}>
      <div className={classes.homeScene}>
        <Header>Hi, I'm Robbie Hughes.</Header>
        <Header>I'm a full-stack web developer.</Header>
        <div className={classes.scrollWidget}>
          <ScrollWidget />
        </div>
      </div>
    </Section>
  )
}

export default React.memo(HomeScreen)
