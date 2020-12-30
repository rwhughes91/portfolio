import React from 'react'
import { FiMail } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  small?: boolean
}

const Email: React.FC<Props> = ({ customClassNames, inverted, small }) => {
  return (
    <a
      className={[
        classes.icon,
        customClassNames,
        inverted ? classes.iconInverted : null,
        small ? classes.small : null,
      ].join(' ')}
      href="mailto: rwhughes91@google.com"
      aria-label="Email"
    >
      <FiMail size={16} />
    </a>
  )
}

export default React.memo(Email)
