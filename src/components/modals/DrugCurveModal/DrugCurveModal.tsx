import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CardModal from '@components/CardModal/CardModal'
import DownloadIcon from '@components/ui/icons/Download/Download'
import classes from './DrugCurveModal.module.css'

import { GetPdfLinksQuery } from '../../../../graphql-types'

interface Props {
  show: boolean
  onPress: () => void
  name: string
  description: string
  url: string
  tech?: string
  auth?: [string, string]
  shortDescription: string
}

const DrugCurveModal: React.FC<Props> = ({
  show,
  onPress,
  name,
  description,
  url,
  tech,
  auth,
  shortDescription,
}) => {
  const data: GetPdfLinksQuery = useStaticQuery(query)

  const { alk, nor, vaso } = data.allDataJson.nodes[0].links!

  const icons = (
    <div className={classes.icons}>
      <DownloadIcon label="Alk..." href={alk!} />
      <DownloadIcon label="Nor.." href={nor!} />
      <DownloadIcon label="Vaso.." href={vaso!} />
    </div>
  )
  return (
    <CardModal
      show={show}
      onPress={onPress}
      title={name}
      description={description}
      url={url}
      tech={tech}
      auth={auth}
      noButton
      icons={icons}
      shortDescription={shortDescription}
    />
  )
}

export default React.memo(DrugCurveModal)

const query = graphql`
  query getPdfLinks {
    allDataJson {
      nodes {
        links {
          alk
          nor
          vaso
        }
      }
    }
  }
`
