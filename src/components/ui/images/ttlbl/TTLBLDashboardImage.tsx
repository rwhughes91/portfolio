import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const TTLBLDashboardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ttlblDashboardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="New Jersey Database Dashboard Page"
        draggable={false}
        loading="eager"
      />
    </div>
  )
}

export default React.memo(TTLBLDashboardImage)

const ttlblDashboardQuery = graphql`
  query TTLBLDashboardImageQuery {
    file(relativePath: { eq: "projects/ttlbl/slideshow/dashboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
