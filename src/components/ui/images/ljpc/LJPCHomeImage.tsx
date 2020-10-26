import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const LJPCHomeImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(LJPCHomeQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="LJPC Home Page" draggable={false} />
    </div>
  )
}

export default React.memo(LJPCHomeImage)

const LJPCHomeQuery = graphql`
  query LJPCHomeImageQuery {
    file(relativePath: { eq: "projects/ljpc/ljpc-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
