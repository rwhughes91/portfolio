import React from 'react'
import Text from '@components/ui/Text/Text'
import classes from './FlashMessage.module.css'

interface Props {
  message: string
}

const FlashMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={classes.flashMessage}>
      <Text size="medium">{message}</Text>
    </div>
  )
}

export default React.memo(FlashMessage)
