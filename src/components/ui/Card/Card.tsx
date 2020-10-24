import React, { useRef, useEffect, useState, useCallback } from 'react'
import classes from './Card.module.css'
import ColorngCardImage from '@components/ui/images/colorng/ColorngCardImage'
import DrugCurvesCardImage from '@components/ui/images/drugCurves/DrugCurvesCardImage'
import SDRCardImage from '@components/ui/images/sdr/SDRCardImage'
import TTLBLCardImage from '@components/ui/images/ttlbl/TTLBLCardImage'
import LJPCCardImage from '@components/ui/images/ljpc/LJPCCardImage'
import OdonateCardImage from '@components/ui/images/odonate/OdonateCardImage'
import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'

import TTLBLModal from '@components/modals/TTLBLModal'

interface Props {
  name: string
  shortDescription: string
  description: string
  image: 'sdr' | 'ttlbl' | 'colorng' | 'drugCurves' | 'ljpc' | 'odt'
  url: string
  tech?: string
  auth?: boolean
}

const Card: React.FC<Props> = ({ description, image, url, name, tech, shortDescription, auth }) => {
  const buttonElementRef = useRef<HTMLButtonElement | null>(null)
  const [showModal, setShowModal] = useState(false)

  const [show, setShow] = useState(false)

  const toggleModalHandler = useCallback(() => {
    setShowModal(prevState => !prevState)
  }, [])

  useEffect(() => {
    const refReference = buttonElementRef.current
    if (refReference) {
      refReference.onfocus = () => {
        setShow(true)
      }
      refReference.onblur = () => {
        setShow(false)
      }
    }
    return () => {
      if (refReference) {
        refReference.onfocus = null
        refReference.onblur = null
      }
    }
  }, [])

  let imageComponent = null
  let modal = null
  switch (image) {
    case 'sdr':
      imageComponent = <SDRCardImage />
      break
    case 'colorng':
      imageComponent = <ColorngCardImage />
      break
    case 'drugCurves':
      imageComponent = <DrugCurvesCardImage />
      break
    case 'ljpc':
      imageComponent = <LJPCCardImage />
      break
    case 'odt':
      imageComponent = <OdonateCardImage />
      break
    default:
      imageComponent = <TTLBLCardImage />
      modal = (
        <TTLBLModal
          show={showModal}
          onPress={toggleModalHandler}
          url={url}
          name={name}
          description={description}
          tech={tech}
          auth={auth}
        />
      )
  }

  return (
    <>
      <figure className={classes.card}>
        <figcaption className={[classes.caption, show ? classes.show : null].join(' ')}>
          <Text size="medium" customClassNames={classes.description}>
            {shortDescription}
          </Text>
          <Button size="medium" customRef={buttonElementRef} onPress={toggleModalHandler}>
            Learn More
          </Button>
        </figcaption>
        <div className={classes.imageContainer}>{imageComponent}</div>
      </figure>
      {modal}
    </>
  )
}

export default React.memo(Card)
