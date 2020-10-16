import React from 'react'
import classes from './ImageContainer.module.css'

import CampingImage from '@components/ui/images/CampingImage'
import MarlowImage from '@components/ui/images/MarlowImage'
import FlowerImage from '@components/ui/images/FlowerImage'

const ImageContainer: React.FC = () => {
  return (
    <div className={classes.composition}>
      <CampingImage customClassNames={[classes.image, classes.firstImage].join(' ')} />
      <MarlowImage customClassNames={[classes.image, classes.secondImage].join(' ')} />
      <FlowerImage customClassNames={[classes.image, classes.thirdImage].join(' ')} />
    </div>
  )
}

export default React.memo(ImageContainer)
