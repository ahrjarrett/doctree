import React from "react"
import { graphql } from "gatsby"

// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const post = data.orgContent
  const { title } = post.meta

  return (
    <div>
      <h1>{title || "title failed"}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    orgContent(fields: { slug: { eq: $slug } }) {
      html
      meta {
        title
      }
    }
  }
`

export default Template
