import React from 'react'
import { graphql } from 'gatsby'
import ContactForm from '@components/ContactForm/ContactForm'
import SEO from '@components/SEO/SEO'

import { GetMetadataContactPageQuery } from '../../graphql-types'

const ContactPage: React.FC<{ data: GetMetadataContactPageQuery }> = ({ data }) => {
  return (
    <>
      <SEO
        link={data.site?.siteMetadata?.linkContact || ''}
        title={data.site?.siteMetadata?.contactTitle || ''}
        body="contact"
      />
      <ContactForm />
    </>
  )
}

export default ContactPage

export const query = graphql`
  query getMetadataContactPage {
    site {
      siteMetadata {
        contactTitle
        linkContact
      }
    }
  }
`
