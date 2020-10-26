import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import classes from '../icons.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  label: string
  customClassNames?: string
  href: string
}

const PDF: React.FC<Props> = ({ customClassNames, label, href }) => {
  return (
    <a
      className={[classes.icon, classes.pdfIcon, customClassNames].join(' ')}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Text size="small" customClassNames={classes.header}>
        {label}
      </Text>
      <FaRegFilePdf size={20} />
    </a>
  )
}

export default React.memo(PDF)
