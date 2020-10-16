import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const CampingImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(campingQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={data.file.childImageSharp.fluid} alt="Camping Image of Emelia and Marlow" />
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
