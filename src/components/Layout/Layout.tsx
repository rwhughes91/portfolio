import React from 'react'
import HomeScene from '@components/scenes/Home/HomeScene'
import AboutScene from '@components/scenes/About/AboutScene'

const Layout: React.FC = () => {
  return (
    <>
      <HomeScene />
      <AboutScene />
    </>
  )
}

export default React.memo(Layout)
