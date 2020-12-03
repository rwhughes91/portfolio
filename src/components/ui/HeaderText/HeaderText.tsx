import React from 'react'
import Text from '../Text/Text'
import classes from './HeaderText.module.css'
import { useInView } from 'react-intersection-observer'

interface Props {
  children: string
}

const HeaderText: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.75, triggerOnce: true })
  return (
    <Text
      size="xLarge"
      bold
      customClassNames={[classes.marginBottom, inView && classes.view].join(' ')}
      customRef={ref}
    >
      {children}
    </Text>
  )
}

export default React.memo(HeaderText)
