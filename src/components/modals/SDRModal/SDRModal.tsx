import React from 'react'
import CardModal from '@components/CardModal/CardModal'

import SDRHomeImage from '@components/ui/images/sdr/SDRHomeImage'
import SDRArtistsImage from '@components/ui/images/sdr/SDRArtistsImage'
import SDRAdminImage from '@components/ui/images/sdr/SDRAdminImage'
import SDRCheckoutImage from '@components/ui/images/sdr/SDRCheckoutImage'
import SDREventsImage from '@components/ui/images/sdr/SDREventsImage'
import SDRNewsImage from '@components/ui/images/sdr/SDRNewsImage'
import SDRShopImage from '@components/ui/images/sdr/SDRShopImage'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: boolean
}

const TTLBLModal: React.FC<Props> = ({ show, onPress, name, description, url, tech, auth }) => {
  const images = [
    <SDRHomeImage key={0} />,
    <SDRNewsImage key={1} />,
    <SDRArtistsImage key={2} />,
    <SDREventsImage key={3} />,
    <SDRShopImage key={4} />,
    <SDRCheckoutImage key={5} />,
    <SDRAdminImage key={6} />,
  ]

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

export default React.memo(TTLBLModal)
