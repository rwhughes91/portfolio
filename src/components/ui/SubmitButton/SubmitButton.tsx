import React from 'react'
import Button from '@components/ui/Button/Button'
import classes from './SubmitButton.module.css'

interface Props {
  children: string
  customClassNames?: string
  customButtonClassNames?: string
  disabled?: boolean
  onPress?: () => void
}

const SubmitButton: React.FC<Props> = ({
  children,
  customClassNames,
  customButtonClassNames,
  disabled,
  onPress,
}) => {
  return (
    <Button
      size="medium"
      customClassNames={[classes.submitButtonText, customClassNames].join(' ')}
      customButtonClassNames={[classes.submitButton, customButtonClassNames].join(' ')}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </Button>
  )
}

export default React.memo(SubmitButton)
