import React from 'react'
import classes from './Row.module.css'

interface Props {
  children: any
  styles?: React.CSSProperties
  customClassNames?: string
  customRef?:
    | React.MutableRefObject<HTMLDivElement | null>
    | ((node?: Element | null | undefined) => void)
}

const Row: React.FC<Props> = ({ styles, children, customClassNames, customRef }) => {
  return (
    <div style={styles} className={[classes.row, customClassNames].join(' ')} ref={customRef}>
      {children}
    </div>
  )
}

export default React.memo(Row)
