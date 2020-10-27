import React, { useCallback, useState } from 'react'
import classes from './Slideshow.module.css'

interface Props {
  children: JSX.Element[]
}

const Slideshow: React.FC<Props> = ({ children }) => {
  const width = children.length * 100
  const [transform, setTransform] = useState(0)

  const onClickHandler = useCallback(
    (direction: 'next' | 'prev') => {
      if (direction === 'next') {
        setTransform(prevState => {
          return prevState - 100 / children.length
        })
      } else {
        setTransform(prevState => {
          return prevState + 100 / children.length
        })
      }
    },
    [children.length]
  )

  const factor = 100 / children.length
  const slideNumber = Math.floor(Math.abs(transform) / factor)

  return (
    <div className={classes.slideShow}>
      {slideNumber > 0 && (
        <button
          className={[classes.iconLeft, classes.icon].join(' ')}
          onClick={() => onClickHandler('prev')}
          aria-label="Previous Image"
        />
      )}
      {slideNumber < children.length - 1 && (
        <button
          className={[classes.iconRight, classes.icon].join(' ')}
          onClick={() => onClickHandler('next')}
          aria-label="Next Image"
        />
      )}
      <div
        className={classes.carousel}
        style={{ width: `${width}%`, transform: `translateX(${transform}%)` }}
      >
        {children.map((child, index) => (
          <div className={classes.showItem} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Slideshow)
