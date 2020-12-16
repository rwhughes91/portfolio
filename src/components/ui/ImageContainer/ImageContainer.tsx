import React from 'react'
import classes from './ImageContainer.module.css'
import { useInView } from 'react-intersection-observer'

import CampingImage from '@components/ui/images/CampingImage'
import MarlowImage from '@components/ui/images/MarlowImage'
import FlowerImage from '@components/ui/images/FlowerImage'

interface Props {
  collage?: boolean
  customRef?: (node?: Element | null | undefined) => void
}

const ImageContainer: React.FC<Props> = ({ collage, customRef }) => {
  const { ref: firstImageRef, inView: inViewFirstImage } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  })
  const { ref: secondImageRef, inView: inViewSecondImage } = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  const { ref: thirdImageRef, inView: inViewThirdImage } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div
      ref={customRef}
      className={[classes.imageContainer, collage ? classes.imageContainerCollage : null].join(' ')}
    >
      <div className={classes.composition}>
        <CampingImage
          customRef={firstImageRef}
          customClassNames={[
            classes.image,
            classes.firstImage,
            collage ? classes.imageCollage : null,
            inViewFirstImage ? classes.view : classes.hide,
          ].join(' ')}
        />
        <MarlowImage
          customRef={secondImageRef}
          customClassNames={[
            classes.image,
            classes.secondImage,
            collage ? classes.imageCollage : null,
            inViewSecondImage ? classes.view : classes.hide,
          ].join(' ')}
        />
        <FlowerImage
          customRef={thirdImageRef}
          customClassNames={[
            classes.image,
            classes.thirdImage,
            collage ? classes.imageCollage : null,
            inViewThirdImage ? classes.view : classes.hide,
          ].join(' ')}
        />
      </div>
    </div>
  )
}

export default React.memo(ImageContainer)
