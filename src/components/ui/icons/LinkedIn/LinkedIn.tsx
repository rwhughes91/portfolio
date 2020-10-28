import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  small?: boolean
}

const LinkedIn: React.FC<Props> = ({ customClassNames, inverted, small }) => {
  return (
    <a
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null, small ? classes.small : null].join(' ')}
      href="https://www.linkedin.com/in/robert-hughes-9050ab100/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn Link"
    >
      <FaLinkedinIn size={16} />
    </a>
  )
}

export default React.memo(LinkedIn)
