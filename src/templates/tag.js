import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../templates/blog-list"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  const title = `More about "${tag}"`;
  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <List data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
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