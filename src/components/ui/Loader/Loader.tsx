import React from 'react'
import classes from './Loader.module.css'

interface Props {
  customClassNames?: string
}

const Loader: React.FC<Props> = ({ customClassNames }) => {
  return (
    <div className={[classes.loader, customClassNames].join(' ')}>
      <div className={classes.bubble} />
      <div className={classes.bubble} />
      <div className={classes.bubble} />
    </div>
  )
}

export default React.memo(Loader)
