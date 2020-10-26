import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const OdonateHomeImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(odonateHomeQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="ODT Home Page" draggable={false} />
    </div>
  )
}

export default React.memo(OdonateHomeImage)

const odonateHomeQuery = graphql`
  query OdonateHomeImageQuery {
    file(relativePath: { eq: "projects/odonate/odt-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
