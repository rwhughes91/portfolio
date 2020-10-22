import React, { useCallback, useState } from 'react'
import classes from './IconContainer.module.css'
import Column from '@components/Layout/Column/Column'
import AnimateHeight from 'react-animate-height'

import ResumeIcon from '@components/ui/icons/Resume/Resume'
import EmailIcon from '@components/ui/icons/Email/Email'
import GithubIcon from '@components/ui/icons/Github/Github'
import LinkedInIcon from '@components/ui/icons/LinkedIn/LinkedIn'
import PlusIcon from '@components/ui/icons/Plus/Plus'
import ArrowUpIcon from '@components/ui/icons/ArrowUp/ArrowUp'

interface Props {
  arrow?: boolean
  onPress?: () => void
}

const IconContainer: React.FC<Props> = ({ arrow, onPress }) => {
  const [showIcons, setShowIcons] = useState(false)

  const toggleIconsHandler = useCallback(() => {
    setShowIcons(prevState => !prevState)
  }, [])

  const iconBar = (
    <AnimateHeight id="icons" duration={300} height={showIcons ? 'auto' : 0}>
      <Column customClassNames={classes.iconContainer}>
        <ResumeIcon customClassNames={classes.first} />
        <EmailIcon customClassNames={classes.second} />
        <GithubIcon customClassNames={classes.third} />
        <LinkedInIcon customClassNames={classes.fourth} />
      </Column>
    </AnimateHeight>
  )
  return (
    <Column customClassNames={[classes.fixed].join(' ')}>
      {iconBar}
      {arrow ? (
        <ArrowUpIcon onPress={onPress} customClassNames={classes.margin} />
      ) : (
        <PlusIcon
          onPress={toggleIconsHandler}
          customClassNames={classes.margin}
          type={showIcons ? 'exit' : 'plus'}
        />
      )}
    </Column>
  )
}

export default React.memo(IconContainer)
