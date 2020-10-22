import React from 'react'
import classes from './Button.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  children: string
  size: 'small' | 'medium' | 'large'
  customClassNames?: string
  customRef?: React.MutableRefObject<HTMLButtonElement | null>
  onPress: () => void
}

const Button: React.FC<Props> = ({ customClassNames, size, children, customRef, onPress }) => {
  return (
    <button className={classes.button} ref={customRef} onClick={onPress}>
      <Text
        size={size}
        customClassNames={customClassNames}
        styles={{ color: 'var(--light-gray-1)', textAlign: 'center' }}
      >
        {children}
      </Text>
    </button>
  )
}

export default React.memo(Button)
