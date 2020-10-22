import React from 'react'
import { FiMail } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const Email: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
    >
      <FiMail size={16} />
    </button>
  )
}

export default React.memo(Email)
