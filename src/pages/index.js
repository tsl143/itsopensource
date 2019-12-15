import React from "react"
import { graphql } from "gatsby"

import List from "../templates/blog-list"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props

    return (
      <List
        location={location}
        data={data}
      />
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description,
            author
          }
        }
      }
    }
  }
`
