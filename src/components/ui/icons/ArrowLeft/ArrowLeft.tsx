import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  onPress?: () => void
  customRef?: React.MutableRefObject<HTMLButtonElement | null>
}

const ArrowLeft: React.FC<Props> = ({ customClassNames, inverted, onPress, customRef }) => {
  return (
    <button
      type="button"
      className={[
        classes.contactIcon,
        customClassNames,
        inverted ? classes.iconInverted : null,
      ].join(' ')}
      onClick={onPress}
      ref={customRef}
      aria-label="Back Icon"
    >
      <FiArrowLeft size={24} />
    </button>
  )
}

export default React.memo(ArrowLeft)
