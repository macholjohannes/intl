import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MjlogoSm = () => {
  const data = useStaticQuery(graphql`
    query {
      mjLogosm: file(relativePath: { eq: "machol-&-johannes-logo.png" }) {
        childImageSharp {
          fixed(width: 275) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.mjLogosm?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.mjLogosm.childImageSharp.fixed} alt="Machol and Johannes" />
}

export default MjlogoSm
