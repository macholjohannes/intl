import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MjlogoLg = () => {
  const data = useStaticQuery(graphql`
    query {
      mjLogolg: file(relativePath: { eq: "machol-&-johannes-logo.png" }) {
        childImageSharp {
          fixed(width: 341) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.mjLogolg?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.mjLogolg.childImageSharp.fixed} alt="Machol and Johannes" />
}

export default MjlogoLg
