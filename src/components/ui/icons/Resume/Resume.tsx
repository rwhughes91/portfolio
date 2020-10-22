import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
}

const Resume: React.FC<Props> = ({ customClassNames }) => {
  return (
    <button className={[classes.icon, customClassNames].join(' ')}>
      <FaRegFilePdf size={16} />
    </button>
  )
}

export default React.memo(Resume)
