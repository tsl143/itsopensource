import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../templates/blog-list"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const title = data.site.siteMetadata.title

    return (
      <Layout location={location} title={title}>
        <SEO title={title} />
        <List data={data} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { show: { eq: true } } }
    ) {
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
