import React from 'react'
import classes from './ScrollWidget.module.css'

const ScrollWidget: React.FC = () => {
  return (
    <div className={classes.box}>
      <span className={classes.scroll} />
    </div>
  )
}

export default React.memo(ScrollWidget)
