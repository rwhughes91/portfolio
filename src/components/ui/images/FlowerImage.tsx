import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
  customRef?: (node?: Element | null | undefined) => void
}

const FlowerImage: React.FC<Props> = ({ styles, customClassNames, customRef }) => {
  const data = useStaticQuery(flowerQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles} ref={customRef}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Del Mar, San Diego Flower Field"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(FlowerImage)

const flowerQuery = graphql`
  query flowerImageQuery {
    file(relativePath: { eq: "flower.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
