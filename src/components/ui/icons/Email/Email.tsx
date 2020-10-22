import React from 'react'
import { FiMail } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
}

const Email: React.FC<Props> = ({ customClassNames }) => {
  return (
    <button className={[classes.icon, customClassNames].join(' ')}>
      <FiMail size={16} />
    </button>
  )
}

export default React.memo(Email)
