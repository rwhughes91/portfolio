import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }} alt="SDR Card" />
    </div>
  )
}

export default React.memo(SdrCardImage)

const sdrCardQuery = graphql`
  query SdrCardImageQuery {
    file(relativePath: { eq: "projects/sdr/sdr-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
