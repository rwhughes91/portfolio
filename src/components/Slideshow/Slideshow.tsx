import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classes from './Slideshow.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slideshow.css'

interface Props {
  children: JSX.Element[]
}

const Slideshow: React.FC<Props> = ({ children }) => {
  return (
    <Carousel
      className={classes.slideShow}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      emulateTouch
      swipeable
      useKeyboardArrows
    >
      {children.map((component, index) => {
        return (
          <div className={classes.showItem} key={index}>
            {component}
          </div>
        )
      })}
    </Carousel>
  )
}

export default React.memo(Slideshow)
