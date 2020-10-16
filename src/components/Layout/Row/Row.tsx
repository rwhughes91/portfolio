import React from 'react'
import classes from './Row.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
}

const Row: React.FC<Props> = ({ styles, children }) => {
  return (
    <div style={styles} className={classes.Row}>
      {children}
    </div>
  )
}

export default React.memo(Row)
