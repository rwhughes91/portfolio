import React from 'react'
import classes from './ContactScene.module.css'
import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'
import Row from '@components/Layout/Row/Row'
import Column from '@components/Layout/Column/Column'

import EmailIcon from '@components/ui/icons/Email/Email'
import GithubIcon from '@components/ui/icons/Github/Github'
import LinkedInIcon from '@components/ui/icons/LinkedIn/LinkedIn'
import ResumeIcon from '@components/ui/icons/Resume/Resume'

interface Props {
  customRef?: React.MutableRefObject<HTMLDivElement | null>
  onPress: () => void
}

const ContactScene: React.FC<Props> = ({ customRef, onPress }) => {
  return (
    <div className={classes.container}>
      <Row customClassNames={classes.contactMe}>
        <Text size="large" bold customClassNames={[classes.contactMeText, classes.pad].join(' ')}>
          Contact
        </Text>
        <Text size="medium" customClassNames={[classes.contactMeText, classes.pad].join(' ')}>
          Have a question or want to work together?
        </Text>
        <Button size="medium" onPress={onPress}>
          Reach out
        </Button>
      </Row>
      <div className={classes.content}>
        <Column customClassNames={classes.column}>
          <Text
            size="small"
            styles={{ textAlign: 'center' }}
            customClassNames={[classes.pad, classes.marginBottom, classes.learnSomething].join(' ')}
          >
            Learn something everyday, one day at a time.
          </Text>
          <Row customClassNames={classes.icons} customRef={customRef}>
            <ResumeIcon small />
            <EmailIcon small />
            <GithubIcon small />
            <LinkedInIcon small />
          </Row>
          <Text
            size="small"
            styles={{ textAlign: 'center' }}
            customClassNames={[classes.pad, classes.marginTop].join(' ')}
          >
            Robbie Hughes &copy; 2020
          </Text>
        </Column>
      </div>
    </div>
  )
}

export default React.memo(ContactScene)
