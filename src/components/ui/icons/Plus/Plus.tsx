import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  onPress: () => void
  type: 'exit' | 'plus'
}

const Plus: React.FC<Props> = ({ customClassNames, onPress, type }) => {
  return (
    <button
      className={[
        classes.icon,
        classes.blue,
        customClassNames,
        type === 'plus' ? classes.iconInverted : null,
      ].join(' ')}
      onClick={onPress}
      aria-label="Plus Icon"
    >
      {type === 'plus' ? <FiPlus size={16} /> : <FiX size={16} />}
    </button>
  )
}

export default React.memo(Plus)
