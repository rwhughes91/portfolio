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
  images: JSX.Element[]
  title: string
  description: string
  url: string
  tech?: string
  auth?: boolean
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
}) => {
  const onPressHandler = useCallback(() => {
    window.open(url, '_blank')
  }, [url])

  return (
    <Modal show={show} onPress={onPress} customClassNames={classes.modal}>
      <div className={classes.cardModal}>
        <SlideShow>{images}</SlideShow>
        <Column customClassNames={classes.content}>
          <Row customClassNames={classes.header}>
            <Text size="large" customClassNames={classes.center}>
              {title}
            </Text>
            <Button
              size="small"
              customClassNames={classes.button}
              customButtonClassNames={[classes.buttonContainer, classes.headerButton].join(' ')}
              onPress={onPressHandler}
            >
              Go to site
            </Button>
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
          {auth && (
            <div className={[classes.auth, classes.centerContainer].join(' ')}>
              <Text size="medium" customClassNames={[classes.authText, classes.center].join(' ')}>
                Authentication is required to use app.
              </Text>
              <Text size="medium" customClassNames={classes.center}>
                {' Please contact me if you wish to see a demo.'}
              </Text>
            </div>
          )}
          <Button
            size="medium"
            customClassNames={classes.button}
            customButtonClassNames={[classes.buttonContainer, classes.secondaryButton].join(' ')}
            onPress={onPressHandler}
          >
            Go to site
          </Button>
        </Column>
      </div>
    </Modal>
  )
}

export default React.memo(CardModal)
