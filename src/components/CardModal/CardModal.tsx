import React, { useCallback } from 'react'
import Modal from '@components/ui/Modal/Modal'
import SlideShow from '@components/Slideshow/Slideshow'
import classes from './CardModal.module.css'
import Text from '@components/ui/Text/Text'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Button from '@components/ui/Button/Button'

interface Props {
  show: boolean
  onPress: () => void
  images?: JSX.Element[]
  title: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
  noButton?: boolean
  noImages?: boolean
  icons?: JSX.Element
}

const CardModal: React.FC<Props> = ({
  show,
  onPress,
  images,
  title,
  description,
  url,
  tech,
  auth,
  noButton,
  icons,
}) => {
  const onPressHandler = useCallback(() => {
    window.open(url, '_blank')
  }, [url])

  return (
    <Modal show={show} onPress={onPress} customClassNames={classes.modal}>
      <div className={classes.cardModal}>
        {images && <SlideShow>{images}</SlideShow>}
        <Column customClassNames={classes.content}>
          <Row customClassNames={classes.header}>
            <Text size="large" customClassNames={classes.center}>
              {title}
            </Text>
            {!noButton && (
              <Button
                size="small"
                customClassNames={classes.button}
                customButtonClassNames={[classes.buttonContainer, classes.headerButton].join(' ')}
                onPress={onPressHandler}
              >
                Go to site
              </Button>
            )}
          </Row>
          <Text size="medium" customClassNames={classes.center}>
            {description}
          </Text>
          {tech && (
            <>
              <Text size="medium" customClassNames={[classes.margin, classes.techHeader].join(' ')}>
                Tech used:
              </Text>
              <Text size="medium" customClassNames={classes.center}>
                {tech}
              </Text>
            </>
          )}
          {auth && auth.length > 0 && (
            <div className={[classes.auth, classes.centerContainer].join(' ')}>
              <Text size="medium" customClassNames={[classes.authText, classes.center].join(' ')}>
                {auth[0]}
              </Text>
              <Text size="medium" customClassNames={classes.center}>
                {auth[1]}
              </Text>
            </div>
          )}
          {!noButton && (
            <Button
              size="medium"
              customClassNames={classes.button}
              customButtonClassNames={[classes.buttonContainer, classes.secondaryButton].join(' ')}
              onPress={onPressHandler}
            >
              Go to site
            </Button>
          )}
          {icons && (
            <>
              <Text size="medium" customClassNames={[classes.margin, classes.techHeader].join(' ')}>
                Example downloads:
              </Text>
              {icons}
            </>
          )}
        </Column>
      </div>
    </Modal>
  )
}

export default React.memo(CardModal)
