import React from 'react'
import { FiGithub } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const Github: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <a
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
      href="https://github.com/rwhughes91"
      target="_blank"
      rel="noreferrer"
    >
      <FiGithub size={16} />
    </a>
  )
}

export default React.memo(Github)
