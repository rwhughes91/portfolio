import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
}

const Resume: React.FC<Props> = ({ customClassNames, inverted }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
    >
      <FaRegFilePdf size={16} />
    </button>
  )
}

export default React.memo(Resume)
