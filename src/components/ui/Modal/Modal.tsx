import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '@components/ui/Backdrop/Backdrop'
import { CSSTransition } from 'react-transition-group'

interface Props {
  onPress: () => void
  show: boolean
  children: JSX.Element
  customBackdropClassNames?: string
  customClassNames?: string
}

const Modal: React.FC<Props> = ({
  onPress,
  show,
  children,
  customClassNames,
  customBackdropClassNames,
}) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exit: classes.exit,
        exitActive: classes.exitActive,
      }}
    >
      <Backdrop onPress={onPress} customClassNames={customBackdropClassNames}>
        <div className={[classes.modal, customClassNames].join(' ')}>{children}</div>
      </Backdrop>
    </CSSTransition>
  )
}

export default React.memo(Modal)
