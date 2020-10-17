import React from 'react'
import ListItem from '@components/ui/ListItem/ListItem'
import classes from './List.module.css'

interface Props {
  items: string[]
}

const List: React.FC<Props> = props => {
  return (
    <ul className={classes.list}>
      {props.items.map((text, index) => {
        return <ListItem text={text} key={index} />
      })}
    </ul>
  )
}

export default React.memo(List)
