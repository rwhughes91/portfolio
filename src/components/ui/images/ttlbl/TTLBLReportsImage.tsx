import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const TTLBLReportsImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ttlblReportsQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="New Jersey Database Reports Page"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(TTLBLReportsImage)

const ttlblReportsQuery = graphql`
  query TTLBLReportsImageQuery {
    file(relativePath: { eq: "projects/ttlbl/slideshow/reports.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
