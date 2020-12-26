import React from 'react'
import classes from './ProjectsScene.module.css'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Card from '@components/ui/Card/Card'
import HeaderText from '@components/ui/HeaderText/HeaderText'
import { useInView } from 'react-intersection-observer'

const ProjectsScene: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  return (
    <Section pad styles={{ backgroundColor: 'var(--light-gray-1)' }}>
      <Column customClassNames={classes.container}>
        <HeaderText>Recent Projects</HeaderText>
        <div className={classes.content} ref={ref}>
          <Row customClassNames={[classes.cards, inView && classes.view].join(' ')}>
            <Card
              image="sdr"
              name="Super Delicious Records"
              shortDescription="A record label e-commerce web application."
              description="A record label e-commerce web application that primarily manages metal, punk, and hard rock bands. This app also includes an admin interface (inspired by django-admin) to easily manage and add data."
              tech="JavaScript/TypeScript, React, Next.js, Apollo Micro Server (GraphQL), Firebase, Stripe, SendGrid/Twilio, AWS S3, AWS CloudFront, SCSS, CSS Modules, PostCSS, Webpack, Babel, Jest, Vercel"
              url="https://super-delicious-records.vercel.app/"
              customClassNames={classes.sdr}
            />
            <Card
              image="colorng"
              name="ColorNg"
              description="A react native application that lets you create and share color gradients. You can create gradients manually, or use images to create gradients. Every morning 4 gradients are created and featured for the day."
              shortDescription="A react native application that lets you create and share color gradients."
              tech="JavaScript/TypeScript, React, React Native, Firebase, SQLite, Redux, Redux Thunk, AWS Lambda, Metro, Babel, Jest, Expo"
              auth={[
                'You need to use the expo client app to preview this application if you are using an iPhone.',
                ' Please contact me if you have any questions!',
              ]}
              url="https://expo.io/@rwhughes91/projects/colorNg"
              customClassNames={classes.colorng}
            />
            <Card
              image="ttlbl"
              name="New Jersey Tax Lien Database"
              shortDescription="A web app/accounting tool for acquired tax liens in the state of New Jersey."
              description="A web app/accounting tool for acquired tax liens in the state of New Jersey. We used this tool for both accounting and financial analysis."
              tech="JavaScript, React, Apollo Server (GraphQL), MongoDB, Redux, Redux-Saga, Socket.io, SendGrid/Twilio, AWS S3, CSS Modules, PostCSS, Webpack, Babel, Jest, Heroku."
              auth={[
                'Authentication is required to use app.',
                ' Please contact me if you wish to see a demo.',
              ]}
              url="https://master.d3d7dkd4jp0e2d.amplifyapp.com/"
              customClassNames={classes.njtl}
            />
            <Card
              image="odt"
              name="Odonate Therapeutics"
              description="A static site built with react for Odonate Therapeutics, a public pharmaceutical company."
              shortDescription="A static react app for Odonate Therapeutics."
              url="https://www.odonate.com/"
              customClassNames={classes.odt}
            />
            <Card
              image="ljpc"
              name="La Jolla Pharmaceutical"
              description="A static site built with react for La Jolla Pharmaceutical Company, a public pharmaceutical company."
              shortDescription="A static react app for La Jolla Pharmaceutical Company."
              url="https://www.lajollapharmaceutical.com/"
              customClassNames={classes.ljpc}
            />
            <Card
              image="drugCurves"
              name="Drug Curves"
              description="A Python project that organizes, analyzes, and generates pdf reports for several U.S. drug markets, including ALK inhibitors, metastatic breast cancer drugs, norepinephrine and vasopressin, oral iron chelators, NK1 receptor antagonists, and 5-HT3 receptor antagonists."
              shortDescription="A python project that organizes, analyzes, and generates pdf reports for several drug markets."
              tech="Python 3, SQLite, Peewee, Pandas, NumPy, Matplotlib, XlsxWriter, HTML5, CSS3, Babel, Selenium, Unittest, Jupyter Notebook, IPython"
              url=""
              customClassNames={classes.drugCurves}
            />
          </Row>
        </div>
      </Column>
    </Section>
  )
}

export default React.memo(ProjectsScene)
