import React from 'react'
import Text from '../Text/Text'
import classes from './HeaderText.module.css'

interface Props {
  children: string
}

const HeaderText: React.FC<Props> = ({ children }) => (
  <Text size="large" bold customClassNames={classes.marginBottom}>
    {children}
  </Text>
)

export default React.memo(HeaderText)
