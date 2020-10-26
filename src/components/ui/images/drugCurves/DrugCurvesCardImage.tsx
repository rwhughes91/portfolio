import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  styles?: React.CSSProperties
  customClassNames?: string
}

const DrugCurvesCardImage: React.FC<Props> = ({ styles, customClassNames }) => {
  const data = useStaticQuery(drugCurvesCardQuery)
  const classNames = [customClassNames]
  return (
    <div className={classNames.join(' ')} style={styles}>
      <Img
        fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1.5 }}
        alt="Drug Curves Card"
        draggable={false}
      />
    </div>
  )
}

export default React.memo(DrugCurvesCardImage)

const drugCurvesCardQuery = graphql`
  query DrugCurvesCardImageQuery {
    file(relativePath: { eq: "projects/drugCurves/drug-curves-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, background: "#051e34") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
