import React from 'react'
import { FiRefreshCw } from 'react-icons/fi'
import classes from '../icons.module.css'

interface Props {
  customClassNames?: string
  inverted?: boolean
  onPress?: () => void
}

const Refresh: React.FC<Props> = ({ customClassNames, inverted, onPress }) => {
  return (
    <button
      type="button"
      className={[
        classes.contactIcon,
        customClassNames,
        inverted ? classes.iconInverted : null,
      ].join(' ')}
      onClick={onPress}
    >
      <FiRefreshCw size={20} />
    </button>
  )
}

export default React.memo(Refresh)
