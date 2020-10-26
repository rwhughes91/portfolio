import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const ColorngOneImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(colorngOneQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="Colorng Home, Detail, and Saved Page"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(ColorngOneImage)

const colorngOneQuery = graphql`
  query ColorngOneImageQuery {
    file(relativePath: { eq: "projects/colorng/slideshow/colorng-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
