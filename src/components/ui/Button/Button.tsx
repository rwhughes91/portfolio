import React from 'react'
import classes from './Button.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  children: string
  size: 'small' | 'medium' | 'large' | 'header'
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
  const classNames = [classes.button, customButtonClassNames]
  switch (size) {
    case 'small':
      classNames.push(classes.small)
      break
    case 'medium':
      classNames.push(classes.medium)
      break
    case 'large':
      classNames.push(classes.large)
      break
    case 'header':
      classNames.push(classes.header)
      break
  }
  return (
    <button className={classNames.join(' ')} ref={customRef} onClick={onPress} disabled={disabled}>
      <Text size={size} customClassNames={[classes.buttonText, customClassNames].join(' ')}>
        {children}
      </Text>
    </button>
  )
}

export default React.memo(Button)
