import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaRegFilePdf } from 'react-icons/fa'
import classes from '../icons.module.css'

import { GetResumeLinkQuery } from '../../../../../graphql-types'

interface Props {
  customClassNames?: string
  inverted?: boolean
  small?: boolean
}

const Resume: React.FC<Props> = ({ customClassNames, inverted, small }) => {
  const data: GetResumeLinkQuery = useStaticQuery(query)
  const { resume } = data.allDataJson.nodes[0].links!

  return (
    <a
      href={resume!}
      className={[
        classes.icon,
        customClassNames,
        inverted ? classes.iconInverted : null,
        small ? classes.small : null,
      ].join(' ')}
      target="_blank"
      rel="noreferrer"
      aria-label="Resume Icon"
    >
      <FaRegFilePdf size={16} />
    </a>
  )
}

export default React.memo(Resume)

const query = graphql`
  query getResumeLink {
    allDataJson {
      nodes {
        links {
          resume
        }
      }
    }
  }
`
