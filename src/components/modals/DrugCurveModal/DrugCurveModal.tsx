import React from 'react'
import CardModal from '@components/CardModal/CardModal'
import PDFIcon from '@components/ui/icons/PDF/PDF'
import classes from './DrugCurveModal.module.css'

import Alk from '@pdfs/alk.pdf'
import Norepinephrine from '@pdfs/norepinephrine.pdf'
import Vasopressin from '@pdfs/vasopressin.pdf'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
}

const DrugCurveModal: React.FC<Props> = ({ show, onPress, name, description, url, tech, auth }) => {
  const icons = (
    <div className={classes.icons}>
      <PDFIcon label="Alk Inhibitors" href={Alk} />
      <PDFIcon label="Norepinephrine" href={Norepinephrine} />
      <PDFIcon label="Vasopressin" href={Vasopressin} />
    </div>
  )
  return (
    <CardModal
      show={show}
      onPress={onPress}
      title={name}
      description={description}
      url={url}
      tech={tech}
      auth={auth}
      noButton
      icons={icons}
    />
  )
}

export default React.memo(DrugCurveModal)
