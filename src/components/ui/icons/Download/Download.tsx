import React from 'react'
import { FiDownload } from 'react-icons/fi'
import classes from '../icons.module.css'
import Text from '@components/ui/Text/Text'

interface Props {
  label: string
  customClassNames?: string
  href: string
}

const Download: React.FC<Props> = ({ customClassNames, label, href }) => {
  return (
    <a
      className={[classes.icon, classes.pdfIcon, customClassNames].join(' ')}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Pdf Report Download"
    >
      <Text size="small" customClassNames={classes.header}>
        {label}
      </Text>
      <FiDownload size={20} />
    </a>
  )
}

export default React.memo(Download)
