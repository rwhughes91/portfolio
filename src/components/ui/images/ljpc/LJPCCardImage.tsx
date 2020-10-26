import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const LJPCCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(ljpcCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }}
        alt="LJPC Card"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(LJPCCardImage)

const ljpcCardQuery = graphql`
  query LjpcCardImageQuery {
    file(relativePath: { eq: "projects/ljpc/ljpc-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
