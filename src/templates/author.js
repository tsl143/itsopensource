import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import List from "../templates/blog-list"

const AuthorView = ({ location, pageContext, data }) => {
  const { author } = pageContext
  const title = `Blogs by "${author}"`;
  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio author={author} />
      <List data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
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

export default AuthorView;
