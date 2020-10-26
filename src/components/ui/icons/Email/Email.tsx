import React from 'react'
import { FiMail } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const Email: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <a
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
      href="mailto: rwhughes91@google.com"
    >
      <FiMail size={16} />
    </a>
  )
}

export default React.memo(Email)
