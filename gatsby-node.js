const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagPage = path.resolve(`./src/templates/tag.js`)
  const authorPage = path.resolve(`./src/templates/author.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                tags
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  const tagSet = new Set();
  const authorSet = new Set();

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const { tags = [], author: writer = "" } = post.node.frontmatter;

    tags.forEach(t => tagSet.add(t))
    if (writer) authorSet.add(writer)

    // Create blog pages
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create tag pages
  tagSet.forEach(tag => {
    createPage({
      path: `tags/${tag.toLowerCase()}`,
      component: tagPage,
      context: {
        tag
      }
    });
  });

  // Create author pages
  authorSet.forEach(author => {
    createPage({
      path: `author/${author.toLowerCase()}`,
      component: authorPage,
      context: {
        author
      }
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const { tags = [], author: writer = "" } = node.frontmatter;

    createNodeField({
      name: `slug`,
      node,
      value,
    })
    tags.forEach(t => {
      createNodeField({
        name: `tags`,
        node,
        value: (`tags/${t.toLowerCase()}`, { lower: true }),
      })
    })
    if (writer) {
      createNodeField({
        name: `authors`,
        node,
        value: `author/${writer.toLowerCase()}`,
      })
    }
  }
}
