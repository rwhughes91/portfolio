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
  hide?: boolean
}

const IconContainer: React.FC<Props> = ({ arrow, onPress, hide }) => {
  const [showIcons, setShowIcons] = useState(true)

  const toggleIconsHandler = useCallback(() => {
    setShowIcons(prevState => !prevState)
  }, [])

  const iconBar = (
    <AnimateHeight
      id="icons"
      duration={300}
      height={showIcons ? 'auto' : 0}
      className={arrow ? classes.showArrow : classes.hideArrow}
    >
      <Column customClassNames={[classes.iconContainer].join(' ')}>
        <ResumeIcon />
        <EmailIcon />
        <GithubIcon />
        <LinkedInIcon />
      </Column>
    </AnimateHeight>
  )
  return (
    <Column customClassNames={[classes.fixed, hide ? classes.main : null].join(' ')}>
      {iconBar}
      <ArrowUpIcon
        onPress={onPress}
        tabIndex={arrow ? undefined : -1}
        customClassNames={[
          classes.margin,
          arrow ? classes.showArrow : classes.hideArrow,
          arrow ? classes.showArrowIcon : classes.hideArrowIcon,
        ].join(' ')}
      />
      <PlusIcon
        onPress={toggleIconsHandler}
        customClassNames={[classes.margin, classes.plus].join(' ')}
        type={showIcons ? 'exit' : 'plus'}
      />
    </Column>
  )
}

export default React.memo(IconContainer)
