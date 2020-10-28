import React from 'react'
import { FiGithub } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  small?: boolean
}

const Github: React.FC<Props> = ({ customClassNames, inverted, small }) => {
  return (
    <a
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null, small ? classes.small : null].join(' ')}
      href="https://github.com/rwhughes91"
      target="_blank"
      rel="noreferrer"
      aria-label="Github Link"
    >
      <FiGithub size={16} />
    </a>
  )
}

export default React.memo(Github)
