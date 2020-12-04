import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
  customRef?: (node?: Element | null | undefined) => void
}

const CampingImage: React.FC<Props> = ({ styles, customClassNames, customRef }) => {
  const data = useStaticQuery(campingQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles} ref={customRef}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Camping Image of Emelia and Marlow"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(CampingImage)

const campingQuery = graphql`
  query campingImageQuery {
    file(relativePath: { eq: "camping.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
