import React from 'react'
import Modal from '@components/ui/Modal/Modal'
import classes from './ThankYouModal.module.css'
import SubmitButton from '@components/ui/SubmitButton/SubmitButton'
import Text from '@components/ui/Text/Text'

interface Props {
  show: boolean
  onPress: () => void
}

const ThankYouModal: React.FC<Props> = ({ show, onPress }) => {
  return (
    <Modal show={show} onPress={onPress} customClassNames={classes.modal}>
      <div className={classes.thankYouContainer}>
        <Text size="xLarge" customClassNames={classes.margin}>
          Thank you!
        </Text>
        <Text size="medium" customClassNames={classes.margin}>
          Expect a response within 24 hours
        </Text>
        <SubmitButton onPress={onPress}>Return</SubmitButton>
      </div>
    </Modal>
  )
}

export default React.memo(ThankYouModal)
