import React from 'react'
import classes from './ImageContainer.module.css'

import CampingImage from '@components/ui/images/CampingImage'
import MarlowImage from '@components/ui/images/MarlowImage'
import FlowerImage from '@components/ui/images/FlowerImage'

interface Props {
  collage?: boolean
  customRef?: (node?: Element | null | undefined) => void
  inView?: boolean
}

const ImageContainer: React.FC<Props> = ({ collage, customRef, inView }) => {
  return (
    <div
      ref={customRef}
      className={[classes.imageContainer, collage ? classes.imageContainerCollage : null].join(' ')}
    >
      <div className={classes.composition}>
        <CampingImage
          customClassNames={[
            classes.image,
            classes.firstImage,
            collage ? classes.imageCollage : null,
            inView ? classes.inView : null,
          ].join(' ')}
        />
        <MarlowImage
          customClassNames={[
            classes.image,
            classes.secondImage,
            collage ? classes.imageCollage : null,
            inView ? classes.inView : null,
          ].join(' ')}
        />
        <FlowerImage
          customClassNames={[
            classes.image,
            classes.thirdImage,
            collage ? classes.imageCollage : null,
            inView ? classes.inView : null,
          ].join(' ')}
        />
      </div>
    </div>
  )
}

export default React.memo(ImageContainer)
