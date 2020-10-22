import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
}

const LinkedIn: React.FC<Props> = ({ customClassNames }) => {
  return (
    <button className={[classes.icon, customClassNames].join(' ')}>
      <FaLinkedinIn size={16} />
    </button>
  )
}

export default React.memo(LinkedIn)
