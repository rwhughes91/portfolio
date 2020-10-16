import React from 'react'
import classes from './ScrollWidget.module.css'

const ScrollWidget: React.FC = () => {
  return (
    <>
      <div className={classes.mouse}></div>
      <p className={classes.scroll}>scroll</p>
    </>
  )
}

export default React.memo(ScrollWidget)
