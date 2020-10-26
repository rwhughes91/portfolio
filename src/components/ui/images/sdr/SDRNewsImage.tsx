import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrNewsImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrNewsQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="SDR News Page" draggable={false} />
    </div>
  )
}

export default React.memo(SdrNewsImage)

const sdrNewsQuery = graphql`
  query SdrNewsImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/news.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
