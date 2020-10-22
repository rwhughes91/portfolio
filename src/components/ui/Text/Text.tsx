import React from 'react'
import classes from './Text.module.css'

interface Props {
  children: string
  styles?: React.CSSProperties
  bold?: boolean
  size: 'small' | 'medium' | 'large' | 'xSmall' | 'xLarge'
  customClassNames?: string
  customRef?: React.MutableRefObject<HTMLSpanElement | null>
}

const Text: React.FC<Props> = ({ styles, bold, size, children, customClassNames, customRef }) => {
  const classNames = [classes.text, bold ? classes.bold : null, customClassNames]
  switch (size) {
    case 'xSmall':
      classNames.push(classes.extraSmall)
    case 'small':
      classNames.push(classes.small)
    case 'medium':
      classNames.push(classes.medium)
    case 'large':
      classNames.push(classes.large)
    case 'xLarge':
      classNames.push(classes.extraLarge)
  }
  return (
    <span className={classNames.join(' ')} style={styles} ref={customRef}>
      {children}
    </span>
  )
}

export default React.memo(Text)
