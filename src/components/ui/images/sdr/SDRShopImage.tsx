import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrShopImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrShopQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="SDR Shop Page" />
    </div>
  )
}

export default React.memo(SdrShopImage)

const sdrShopQuery = graphql`
  query SdrShopImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/shop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
