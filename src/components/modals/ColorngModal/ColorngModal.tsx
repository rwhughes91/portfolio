import React from 'react'
import CardModal from '@components/CardModal/CardModal'

import ColorngOneImage from '@components/ui/images/colorng/ColorngOneImage'
import ColorngTwoImage from '@components/ui/images/colorng/ColorngTwoImage'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
}

const ColorngModal: React.FC<Props> = ({ show, onPress, name, description, url, tech, auth }) => {
  const images = [<ColorngOneImage key={0} />, <ColorngTwoImage key={1} />]

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

export default React.memo(ColorngModal)
