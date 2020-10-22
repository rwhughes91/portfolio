import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const LinkedIn: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
    >
      <FaLinkedinIn size={16} />
    </button>
  )
}

export default React.memo(LinkedIn)
