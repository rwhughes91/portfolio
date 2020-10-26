import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const TTLBLSearchImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ttlblSearchQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="New Jersey Database Search Page"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(TTLBLSearchImage)

const ttlblSearchQuery = graphql`
  query TtlblSearchImageQuery {
    file(relativePath: { eq: "projects/ttlbl/slideshow/search.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
