import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const TTLBLCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ttlblCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }}
        alt="New Jersey Database Card"
      />
    </div>
  )
}

export default React.memo(TTLBLCardImage)

const ttlblCardQuery = graphql`
  query TtlblCardImageQuery {
    file(relativePath: { eq: "projects/ttlbl/njtl-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
