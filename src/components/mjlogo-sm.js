import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MjlogoSm = () => {
  const data = useStaticQuery(graphql`
    query {
      mjLogosm: file(relativePath: { eq: "machol-&-johannes-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 341) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.mjLogosm?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.mjLogosm.childImageSharp.fluid} alt="Machol and Johannes" />
}

export default MjlogoSm
