import React from 'react'
import classes from './Section.module.css'

interface Props {
  styles?: React.CSSProperties
  children?: JSX.Element | JSX.Element[] | string | null
  polygon?: boolean
  pad?: boolean
  fill?: boolean
}

const Section: React.FC<Props> = ({ styles, polygon, pad, fill, children }) => {
  return (
    <section
      className={[
        classes.section,
        polygon ? classes.polygon : null,
        pad ? classes.pad : null,
        fill ? classes.fill : null,
      ].join(' ')}
      style={styles}
    >
      {children}
    </section>
  )
}

export default React.memo(Section)
