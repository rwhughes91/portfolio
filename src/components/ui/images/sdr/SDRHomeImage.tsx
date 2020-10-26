import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrHomeImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrHomeQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="SDR Home Page" />
    </div>
  )
}

export default React.memo(SdrHomeImage)

const sdrHomeQuery = graphql`
  query SdrHomeImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
