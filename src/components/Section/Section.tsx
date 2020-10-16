import React from 'react'
import classes from './Section.module.css'

interface Props {
  styles?: React.CSSProperties
  children?: JSX.Element | JSX.Element[] | string | null
  polygon?: boolean
}

const Section: React.FC<Props> = ({ styles, polygon, children }) => {
  return (
    <section
      className={[classes.section, polygon ? classes.polygon : null].join(' ')}
      style={styles}
    >
      {children}
    </section>
  )
}

export default React.memo(Section)
