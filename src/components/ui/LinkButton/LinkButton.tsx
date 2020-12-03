import React from 'react'
import Button from '@components/ui/Button/Button'
import classes from './LinkButton.module.css'
import { Link } from 'gatsby'

interface Props {
  to: string
  size?: 'small' | 'medium' | 'large'
  children: string | JSX.Element
  custom?: boolean
  customClassNames?: string
}

const LinkButton: React.FC<Props> = ({ to, children, size, custom, customClassNames }) => {
  return (
    <Link to={to} className={classes.LinkButton}>
      {!custom && (
        <Button size={size!} customButtonClassNames={customClassNames}>
          {children as string}
        </Button>
      )}
      {custom && children}
    </Link>
  )
}

export default React.memo(LinkButton)
