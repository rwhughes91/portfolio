import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const TTLBLDetailImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ttlblDetailQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="New Jersey Database Detail Page"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(TTLBLDetailImage)

const ttlblDetailQuery = graphql`
  query TTLBLDetailImageQuery {
    file(relativePath: { eq: "projects/ttlbl/slideshow/detail.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
