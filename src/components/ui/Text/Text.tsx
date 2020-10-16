import React from 'react'
import classes from './Text.module.css'

interface Props {
  children: string
  styles?: React.CSSProperties
  bold?: boolean
  size: 'small' | 'medium' | 'large'
}

const Text: React.FC<Props> = ({ styles, bold, size, children }) => {
  const classNames = [classes.text, bold ? classes.bold : null]
  switch (size) {
    case 'small':
      classNames.push(classes.small)
    case 'medium':
      classNames.push(classes.medium)
    case 'large':
      classNames.push(classes.large)
  }
  return (
    <span className={classNames.join(' ')} style={styles}>
      {children}
    </span>
  )
}

export default React.memo(Text)