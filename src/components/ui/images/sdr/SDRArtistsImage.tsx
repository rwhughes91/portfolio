import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrArtistsImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrArtistsQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="SDR Artists Page"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(SdrArtistsImage)

const sdrArtistsQuery = graphql`
  query SdrArtistsImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/artists.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
