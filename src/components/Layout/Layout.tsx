import React from 'react'
import HomeScene from '@components/scenes/Home/HomeScene'
import AboutScene from '@components/scenes/About/AboutScene'
import ProjectsScene from '@components/scenes/Projects/ProjectsScene'

const Layout: React.FC = () => {
  return (
    <>
      <HomeScene />
      <AboutScene />
      <ProjectsScene />
    </>
  )
}

export default React.memo(Layout)
