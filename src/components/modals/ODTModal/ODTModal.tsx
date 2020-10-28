import React from 'react'
import CardModal from '@components/CardModal/CardModal'

import OdonateHomeImage from '@components/ui/images/odonate/OdonateHomeImage'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
  shortDescription: string
}

const ODTModal: React.FC<Props> = ({
  show,
  onPress,
  name,
  description,
  url,
  tech,
  auth,
  shortDescription,
}) => {
  const images = [<OdonateHomeImage key={0} />]

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
      shortDescription={shortDescription}
    />
  )
}

export default React.memo(ODTModal)
