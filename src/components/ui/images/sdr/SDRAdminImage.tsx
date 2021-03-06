import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrAdminImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrAdminQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="SDR Admin Page"
        draggable={false}
        loading="eager"
      />
    </div>
  )
}

export default React.memo(SdrAdminImage)

const sdrAdminQuery = graphql`
  query SdrAdminImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/admin.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
