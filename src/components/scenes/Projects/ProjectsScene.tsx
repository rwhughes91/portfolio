import React from 'react'
import classes from './ProjectsScene.module.css'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Card from '@components/ui/Card/Card'
import HeaderText from '@components/ui/HeaderText/HeaderText'

const ProjectsScene: React.FC = () => {
  return (
    <Section pad styles={{ backgroundColor: 'var(--light-gray-1)' }}>
      <Column customClassNames={classes.container}>
        <HeaderText>Recent Projects</HeaderText>
        <div className={classes.content}>
          <Row customClassNames={classes.cards}>
            <Card
              image="ttlbl"
              name="New Jersey Tax Lien Database"
              description="A web app/accounting tool for acquired tax liens in the state of New Jersey."
            />
            <Card
              image="sdr"
              name="Super Delicious Records"
              description="A record label e-commerce web application."
            />
            <Card
              image="colorng"
              name="ColorNg"
              description="A react native application that lets you create and share color gradients."
            />
            <Card
              image="odt"
              name="Odonate Therapeutics"
              description="A static react app for Odonate Therapeutics."
            />
            <Card
              image="ljpc"
              name="La Jolla Pharmaceutical"
              description="A static react app for La Jolla Pharmaceutical Company."
            />
            <Card
              image="drugCurves"
              name="Drug Curves"
              description="A python project that organizes, analyzes, and generates pdf reports for several drug markets."
            />
          </Row>
        </div>
      </Column>
    </Section>
  )
}

export default React.memo(ProjectsScene)
