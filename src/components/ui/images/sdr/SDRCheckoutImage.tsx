import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrCheckoutImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrCheckoutQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="SDR Checkout Page"
        draggable={false}
        loading="eager"
      />
    </div>
  )
}

export default React.memo(SdrCheckoutImage)

const sdrCheckoutQuery = graphql`
  query SdrCheckoutImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/checkout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
