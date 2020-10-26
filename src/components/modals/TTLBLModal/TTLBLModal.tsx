import React from 'react'
import CardModal from '@components/CardModal/CardModal'

import TTLBLSearchImage from '@components/ui/images/ttlbl/TTLBLSearchImage'
import TTLBLDetailImage from '@components/ui/images/ttlbl/TTLBLDetailImage'
import TTLBLDashboardImage from '@components/ui/images/ttlbl/TTLBLDashboardImage'
import TTLBLReportsImage from '@components/ui/images/ttlbl/TTLBLReportsImage'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
}

const TTLBLModal: React.FC<Props> = ({ show, onPress, name, description, url, tech, auth }) => {
  const images = [
    <TTLBLSearchImage key={0} />,
    <TTLBLDetailImage key={1} />,
    <TTLBLDashboardImage key={2} />,
    <TTLBLReportsImage key={3} />,
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
