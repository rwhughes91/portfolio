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
              tech="React, Apollo Server (graphql), Mongodb, Redux, Redux-Saga, Socket.io, Sendgrid/Twilio, AWS S3, CSS Modules, PostCss, Webpack, Babel, Jest, Heroku."
              auth={[
                'Authentication is required to use app.',
                ' Please contact me if you wish to see a demo.',
              ]}
              url="https://new-jersey-database.herokuapp.com/"
            />
            <Card
              image="sdr"
              name="Super Delicious Records"
              shortDescription="A record label e-commerce web application."
              description="A record label e-commerce web application that primarily manages metal, punk, and hard rock bands. This app also includes an admin interface (inspired by django-admin) to easily manage and add data."
              tech="React, Next.js, Apollo Micro Server (graphql), Firebase, Stripe, Sendgrid/Twilio, AWS S3, AWS Cloudfront, Scss, Css Modules, PostCss, Typescript, Webpack, Babel, Jest, Vercel"
              url="https://super-delicious-records-nvn09ff67.vercel.app/"
            />
            <Card
              image="colorng"
              name="ColorNg"
              description="A react native application that lets you create and share color gradients. You can create gradients manually, or use images to create gradients. Every morning a deep learning model creates 4 gradients that are featured for the day."
              shortDescription="A react native application that lets you create and share color gradients."
              tech="React, React Native, Firebase, Sqlite, Redux, Redux Thunk, AWS Lambda, Typescript, Metro, Babel, Jest, Expo"
              auth={[
                'You need to use the expo client app to preview this application if you are using an iphone.',
                ' Please contact me if you have any questions!',
              ]}
              url="https://expo.io/@rwhughes91/projects/colorNg"
            />
            <Card
              image="odt"
              name="Odonate Therapeutics"
              description="A static site built with react for Odonate Therapeutics, a public pharmaceutical company."
              shortDescription="A static react app for Odonate Therapeutics."
              url="https://www.odonate.com/"
            />
            <Card
              image="ljpc"
              name="La Jolla Pharmaceutical"
              description="A static site built with react for La Jolla Pharmaceutical Company, a public pharmaceutical company."
              shortDescription="A static react app for La Jolla Pharmaceutical Company."
              url="https://www.lajollapharmaceutical.com/"
            />
            <Card
              image="drugCurves"
              name="Drug Curves"
              description="A python project that organizes, analyzes, and generates pdf reports for several U.S. drug markets, including alk inhibitors, metastatic breast cancer drugs, norepinephrine and vasopressin, oral iron chelators, nk1 receptor antagonists and 5-ht3 receptor antagonists."
              shortDescription="A python project that organizes, analyzes, and generates pdf reports for several drug markets."
              tech="Python 3, Sqlite, Peewee, Pandas, Numpy, Matplotlib, Xlsxwriter, Html5, Css, Babel, Unittest, Jupyter Notebook, Ipython"
              url=""
            />
          </Row>
        </div>
      </Column>
    </Section>
  )
}

export default React.memo(ProjectsScene)
