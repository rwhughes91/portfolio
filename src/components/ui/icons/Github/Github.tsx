import React from 'react'
import { FiGithub } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const Github: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
    >
      <FiGithub size={16} />
    </button>
  )
}

export default React.memo(Github)
