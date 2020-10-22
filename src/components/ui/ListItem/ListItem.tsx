import React from 'react'
import classes from './ListItem.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  text: string
}

const ListItem: React.FC<Props> = ({ text }) => {
  return (
    <li className={classes.listItem}>
      <Text size="medium">{text}</Text>
    </li>
  )
}

export default React.memo(ListItem)
