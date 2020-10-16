import React from 'react'
import classes from './Header.module.css'

interface Props {
  children: string | JSX.Element | (string | JSX.Element)[]
  styles?: React.CSSProperties
  inline?: boolean
}

const Header: React.FC<Props> = ({ styles, children, inline }) => {
  return (
    <h1
      className={classes.header}
      style={{ ...styles, display: inline ? 'inline-block' : 'block' }}
    >
      {children}
    </h1>
  )
}

export default React.memo(Header)
