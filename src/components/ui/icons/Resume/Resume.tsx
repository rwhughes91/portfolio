import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  small?: boolean
}

const Resume: React.FC<Props> = ({ customClassNames, inverted, small }) => {
  return (
    <button
      className={[
        classes.icon,
        customClassNames,
        inverted ? classes.iconInverted : null,
        small ? classes.small : null,
      ].join(' ')}
      aria-label="Resume Icon"
    >
      <FaRegFilePdf size={16} />
    </button>
  )
}

export default React.memo(Resume)
