import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const AccountHelp = () => {
  const data = useStaticQuery(graphql`
    query {
      accountHelp: file(relativePath: { eq: "file-number-help.png" }) {
        childImageSharp {
          fluid(maxWidth: 594) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.accountHelp?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      className='max-w-screen-sm'
      fluid={data.accountHelp.childImageSharp.fluid}
      alt='Account number/File number is located under your address listed as File Number.'
    />
  )
}

export default AccountHelp
