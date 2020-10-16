import React from 'react'
import classes from './Row.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
  customClassNames?: string
}

const Row: React.FC<Props> = ({ styles, children, customClassNames }) => {
  return (
    <div style={styles} className={[classes.row, customClassNames].join(' ')}>
      {children}
    </div>
  )
}

export default React.memo(Row)
