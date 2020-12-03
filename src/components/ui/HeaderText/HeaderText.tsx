import React from 'react'
import Text from '../Text/Text'
import classes from './HeaderText.module.css'

interface Props {
  children: string
}

const HeaderText: React.FC<Props> = ({ children }) => {
  return (
    <Text size="xLarge" bold customClassNames={[classes.marginBottom].join(' ')}>
      {children}
    </Text>
  )
}

export default React.memo(HeaderText)
