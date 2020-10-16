import React from 'react'
import classes from './Column.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
}

const Column: React.FC<Props> = ({ styles, children }) => {
  return (
    <div style={styles} className={classes.column}>
      {children}
    </div>
  )
}

export default React.memo(Column)
