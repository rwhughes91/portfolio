import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const MarlowImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(marlowQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={data.file.childImageSharp.fluid} alt="Scary Marlow" />
    </div>
  )
}

export default React.memo(MarlowImage)

const marlowQuery = graphql`
  query marlowImageQuery {
    file(relativePath: { eq: "marlow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
