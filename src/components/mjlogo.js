import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage2: file(relativePath: { eq: "machol-&-johannes-logo.png" }) {
        childImageSharp {
          fixed(width: 341) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage2?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.placeholderImage2.childImageSharp.fixed} alt="Machol and Johannes" />
}

export default Image2
