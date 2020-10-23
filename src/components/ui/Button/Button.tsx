import React from 'react'
import classes from './Button.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  children: string
  size: 'small' | 'medium' | 'large'
  customClassNames?: string
  customButtonClassNames?: string
  customRef?: React.MutableRefObject<HTMLButtonElement | null>
  onPress?: () => void
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  customClassNames,
  size,
  children,
  customRef,
  onPress,
  customButtonClassNames,
  disabled,
}) => {
  return (
    <button
      className={[classes.button, customButtonClassNames].join(' ')}
      ref={customRef}
      onClick={onPress}
      disabled={disabled}
    >
      <Text size={size} customClassNames={[classes.buttonText, customClassNames].join(' ')}>
        {children}
      </Text>
    </button>
  )
}

export default React.memo(Button)
