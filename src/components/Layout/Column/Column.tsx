import React from 'react'
import classes from './Column.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
  customClassNames?: string
  customRef?:
    | React.MutableRefObject<HTMLDivElement | null>
    | ((node?: Element | null | undefined) => void)
}

const Column: React.FC<Props> = ({ styles, children, customClassNames, customRef }) => {
  return (
    <div style={styles} className={[classes.column, customClassNames].join(' ')} ref={customRef}>
      {children}
    </div>
  )
}

export default React.memo(Column)
