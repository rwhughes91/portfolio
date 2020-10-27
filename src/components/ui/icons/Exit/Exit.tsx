import React from 'react'
import { FiX } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  size?: number
  customClassNames?: string
  inverted?: boolean
  onPress?: () => void
}

const Exit: React.FC<Props> = ({ customClassNames, inverted, onPress, size }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
      onClick={onPress}
      aria-label="Exit Icon"
    >
      <FiX size={size || 16} />
    </button>
  )
}

export default React.memo(Exit)
