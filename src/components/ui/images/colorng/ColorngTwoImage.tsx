import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const ColorngTwoImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(colorngTwoQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="Colorng Created and Search Pages"
        draggable={false}
        loading="eager"
      />
    </div>
  )
}

export default React.memo(ColorngTwoImage)

const colorngTwoQuery = graphql`
  query ColorngTwoImageQuery {
    file(relativePath: { eq: "projects/colorng/slideshow/colorng-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
