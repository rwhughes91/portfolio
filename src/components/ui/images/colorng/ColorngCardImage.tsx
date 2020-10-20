import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const ColorngCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(colorngCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }} alt="Colorng Card" />
    </div>
  )
}

export default React.memo(ColorngCardImage)

const colorngCardQuery = graphql`
  query ColorngCardImageQuery {
    file(relativePath: { eq: "projects/colorng/colorng-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
