import React from 'react'
import classes from './Header.module.css'

interface Props {
  children: string | JSX.Element | (string | JSX.Element)[]
  styles?: React.CSSProperties
  inline?: boolean
  customClassNames?: string
}

const Header: React.FC<Props> = ({ styles, children, inline, customClassNames }) => {
  return (
    <h1
      className={[classes.header, customClassNames].join(' ')}
      style={{ ...styles, display: inline ? 'inline-block' : 'block' }}
    >
      {children}
    </h1>
  )
}

export default React.memo(Header)
