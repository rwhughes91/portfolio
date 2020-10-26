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
              shortDescription="A web app/accounting tool for acquired tax liens in the state of New Jersey."
              description="A web app/accounting tool for acquired tax liens in the state of New Jersey. We used this tool for both accounting and financial analysis."
              tech="React, Apollo Server (graphql), Mongodb, Redux, Redux-Saga, Socket.io, Sendgrid/Twilio, AWS S3, Jest, Heroku."
              auth={true}
              url="https://new-jersey-database.herokuapp.com/"
            />
            <Card
              image="sdr"
              name="Super Delicious Records"
              shortDescription="A record label e-commerce web application."
              description="A record label e-commerce web application that primarily manages metal, punk, and hard rock bands."
              tech="React, Next.js, Apollo Micro Server (graphql), Firebase, Stripe, Sendgrid/Twilio, AWS S3, AWS Cloudfront, Jest, Vercel"
              url="https://super-delicious-records-nvn09ff67.vercel.app/"
            />
            <Card
              image="colorng"
              name="ColorNg"
              description="A react native application that lets you create and share color gradients."
              shortDescription="A react native application that lets you create and share color gradients."
              url=""
            />
            <Card
              image="odt"
              name="Odonate Therapeutics"
              description="A static react app for Odonate Therapeutics."
              shortDescription="A static react app for Odonate Therapeutics."
              url=""
            />
            <Card
              image="ljpc"
              name="La Jolla Pharmaceutical"
              description="A static react app for La Jolla Pharmaceutical Company."
              shortDescription="A static react app for La Jolla Pharmaceutical Company."
              url=""
            />
            <Card
              image="drugCurves"
              name="Drug Curves"
              description="A python project that organizes, analyzes, and generates pdf reports for several drug markets."
              shortDescription="A python project that organizes, analyzes, and generates pdf reports for several drug markets."
              url=""
            />
          </Row>
        </div>
      </Column>
    </Section>
  )
}

export default React.memo(ProjectsScene)
