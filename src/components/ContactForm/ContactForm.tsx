import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { CSSTransition } from 'react-transition-group'
import classes from './ContactForm.module.css'
import SubmitButton from '@components/ui/SubmitButton/SubmitButton'
import Section from '@components/Section/Section'
import Column from '@components/Layout/Column/Column'
import Row from '@components/Layout/Row/Row'
import Text from '@components/ui/Text/Text'
import ArrowLeftIcon from '@components/ui/icons/ArrowLeft/ArrowLeft'
import RefreshIcon from '@components/ui/icons/Refresh/Refresh'
import IconContainer from '@components/IconContainer/IconContainer'
import { initialState, reducer } from './reducer'
import ThankYouModal from '@components/modals/ThankYouModal/ThankYouModal'
import Loader from '@components/ui/Loader/Loader'
import FlashMessage from '@components/ui/FlashMessage/FlashMessage'

interface Props {
  show: boolean
  onPress: () => void
}

const ContactForm: React.FC<Props> = ({ onPress, show }) => {
  const [loading, setLoading] = useState(false)
  const [errorFlash, setErrorFlash] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const backRef = useRef<HTMLButtonElement | null>(null)
  const [formState, dispatch] = useReducer(reducer, initialState)

  const onChangeHandler = useCallback((field: 'name' | 'email' | 'message', value: string) => {
    dispatch({ type: 'edit', payload: { field, value } })
  }, [])

  const onResetHandler = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  const onSubmitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
      }
      emailjs
        .send(
          process.env.GATSBY_EMAILJS_SERVICE_ID as string,
          process.env.GATSBY_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.GATSBY_EMAILJS_USER_ID
        )
        .then(() => {
          onResetHandler()
          setLoading(false)
          setShowModal(true)
        })
        .catch(() => {
          setLoading(false)
          setErrorFlash(true)
        })
    },
    [formState, onResetHandler]
  )

  const onModalPress = useCallback(() => {
    setShowModal(false)
    onPress()
  }, [onPress])

  useEffect(() => {
    if (show && backRef.current) {
      backRef.current.focus()
    }
  }, [show])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (errorFlash) {
      timer = setTimeout(() => {
        setErrorFlash(false)
      }, 3000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [errorFlash])

  return (
    <>
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
        <Section
          styles={{
            backgroundColor: 'var(--light-gray-2)',
            position: 'fixed',
            zIndex: 999,
            top: 0,
            left: 0,
          }}
          fill
          // pad
        >
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <Row customClassNames={classes.iconBarHeader}>
              <ArrowLeftIcon onPress={onPress} customRef={backRef} />
              <Text size="xLarge" bold customClassNames={classes.header}>
                Contact
              </Text>
              <RefreshIcon onPress={onResetHandler} />
            </Row>
            <div className={classes.formFields}>
              <Row customClassNames={classes.headerContainer}>
                <Text size="xLarge" customClassNames={classes.header}>
                  I appreciate your time. I will respond to you ASAP!
                </Text>
              </Row>
              <CSSTransition
                in={errorFlash}
                timeout={500}
                unmountOnExit
                classNames={{
                  enter: classes.enter,
                  enterActive: classes.enterActive,
                  exit: classes.exit,
                  exitActive: classes.exitActive,
                }}
              >
                <FlashMessage message="Oops. Looks like there was an error. Are you connected to the internet?" />
              </CSSTransition>
              <Row customClassNames={classes.row}>
                <Column customClassNames={classes.formFieldContainer}>
                  <input
                    type="text"
                    id="name"
                    className={classes.input}
                    placeholder="Your name"
                    value={formState.name}
                    onChange={value => onChangeHandler('name', value.target.value)}
                    maxLength={255}
                    required
                  />
                  <label htmlFor="name" className={classes.label}>
                    <Text size="medium">Name</Text>
                  </label>
                </Column>
                <Column customClassNames={classes.formFieldContainer}>
                  <input
                    type="email"
                    id="email"
                    className={classes.input}
                    placeholder="Your email"
                    value={formState.email}
                    onChange={value => onChangeHandler('email', value.target.value)}
                    maxLength={255}
                    required
                  />
                  <label htmlFor="email" className={classes.label}>
                    <Text size="medium">Email</Text>
                  </label>
                </Column>
              </Row>
              <Column
                customClassNames={[
                  classes.formFieldContainer,
                  classes.formFieldContainerTextArea,
                ].join(' ')}
              >
                <textarea
                  id="message"
                  className={[classes.input, classes.textArea].join(' ')}
                  placeholder="Please leave a brief description"
                  maxLength={255 * 3}
                  value={formState.message}
                  onChange={value => onChangeHandler('message', value.target.value)}
                  required
                />
                <label htmlFor="message" className={classes.label}>
                  <Text size="medium">Message</Text>
                </label>
                {loading ? (
                  <Loader customClassNames={classes.loader} />
                ) : (
                  <SubmitButton customButtonClassNames={classes.submitButton}>Submit</SubmitButton>
                )}
              </Column>
            </div>
          </form>
          <div className={classes.iconContainer}>
            <IconContainer />
          </div>
        </Section>
      </CSSTransition>
      <ThankYouModal show={showModal && show} onPress={onModalPress} />
    </>
  )
}

export default React.memo(ContactForm)
