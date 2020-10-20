import React from 'react'
import classes from './Card.module.css'
import ColorngCardImage from '@components/ui/images/colorng/ColorngCardImage'
import DrugCurvesCardImage from '@components/ui/images/drugCurves/DrugCurvesCardImage'
import SDRCardImage from '@components/ui/images/sdr/SDRCardImage'
import TTLBLCardImage from '@components/ui/images/ttlbl/TTLBLCardImage'
import LJPCCardImage from '@components/ui/images/ljpc/LJPCCardImage'
import OdonateCardImage from '@components/ui/images/odonate/OdonateCardImage'
import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'

interface Props {
  name: string
  description: string
  image: 'sdr' | 'ttlbl' | 'colorng' | 'drugCurves' | 'ljpc' | 'odt'
}

const Card: React.FC<Props> = ({ name, description, image }) => {
  let imageComponent = <TTLBLCardImage />
  if (image === 'sdr') {
    imageComponent = <SDRCardImage />
  }
  if (image === 'colorng') {
    imageComponent = <ColorngCardImage />
  }
  if (image === 'drugCurves') {
    imageComponent = <DrugCurvesCardImage />
  }
  if (image === 'ljpc') {
    imageComponent = <LJPCCardImage />
  }
  if (image === 'odt') {
    imageComponent = <OdonateCardImage />
  }
  return (
    <figure className={classes.card}>
      <figcaption className={classes.caption}>
        <Text size="small" customClassNames={[classes.description, classes.text].join(' ')}>
          {description}
        </Text>
        <Button size="small">Learn More</Button>
      </figcaption>
      <div className={classes.imageContainer}>{imageComponent}</div>
    </figure>
  )
}

export default React.memo(Card)
