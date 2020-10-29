import React from 'react'
import { FiArrowUp } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  onPress?: () => void
  tabIndex?: number
}

const ArrowUp: React.FC<Props> = ({ customClassNames, inverted, onPress, tabIndex }) => {
  return (
    <button
      className={[classes.icon, customClassNames, inverted ? classes.iconInverted : null].join(' ')}
      onClick={onPress}
      aria-label="Up Arrow Icon"
      tabIndex={tabIndex}
    >
      <FiArrowUp size={16} />
    </button>
  )
}

export default React.memo(ArrowUp)
