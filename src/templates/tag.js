import React from "react"
import { graphql } from "gatsby"

import List from "../templates/blog-list"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  const title = `More about "${tag}"`;
  return (
    <List
      location={location}
      title={title}
      data={data}
    />
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`

export default CategoryTemplate