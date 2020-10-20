import React from 'react'
import classes from './Button.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  children: string
  size: 'small' | 'medium' | 'large'
  customClassNames?: string
}

const Button: React.FC<Props> = ({ customClassNames, size, children }) => {
  return (
    <div className={classes.button}>
      <Text
        size={size}
        customClassNames={customClassNames}
        styles={{ color: 'var(--light-gray-1)' }}
      >
        {children}
      </Text>
    </div>
  )
}

export default React.memo(Button)
