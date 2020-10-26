import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const SdrEventsImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(sdrEventsQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="SDR Events Page" draggable={false} />
    </div>
  )
}

export default React.memo(SdrEventsImage)

const sdrEventsQuery = graphql`
  query SdrEventsImageQuery {
    file(relativePath: { eq: "projects/sdr/slideshow/events.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
