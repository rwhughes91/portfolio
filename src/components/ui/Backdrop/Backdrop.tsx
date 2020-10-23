import React from 'react'
import classes from './Backdrop.module.css'

interface Props {
  onPress?: () => void
  children: JSX.Element
  customClassNames?: string
  displayType?: string
}

const Backdrop: React.FC<Props> = ({ onPress, children, customClassNames }) => {
  return (
    <div className={[classes.backDrop, customClassNames].join(' ')} onClick={onPress}>
      {children}
    </div>
  )
}

export default React.memo(Backdrop)
