import React from 'react'
import classes from './Column.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
  customClassNames?: string
}

const Column: React.FC<Props> = ({ styles, children, customClassNames }) => {
  return (
    <div style={styles} className={[classes.column, customClassNames].join(' ')}>
      {children}
    </div>
  )
}

export default React.memo(Column)
