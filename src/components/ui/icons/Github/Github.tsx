import React from 'react'
import { FiGithub } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
}

const Github: React.FC<Props> = ({ customClassNames }) => {
  return (
    <button className={[classes.icon, customClassNames].join(' ')}>
      <FiGithub size={16} />
    </button>
  )
}

export default React.memo(Github)
