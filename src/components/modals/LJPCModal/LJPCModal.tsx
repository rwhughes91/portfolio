import React from 'react'
import CardModal from '@components/CardModal/CardModal'

import LJPCHomeImage from '@components/ui/images/ljpc/LJPCHomeImage'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
}

const LJPCModal: React.FC<Props> = ({ show, onPress, name, description, url, tech, auth }) => {
  const images = [<LJPCHomeImage key={0} />]

  return (
    <CardModal
      images={images}
      show={show}
      onPress={onPress}
      title={name}
      description={description}
      url={url}
      tech={tech}
      auth={auth}
    />
  )
}

export default React.memo(LJPCModal)
