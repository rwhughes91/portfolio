import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const OdonateCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(odonateCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }}
        alt="SDR Card"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(OdonateCardImage)

const odonateCardQuery = graphql`
  query OdonateCardImageQuery {
    file(relativePath: { eq: "projects/odonate/odonate-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
