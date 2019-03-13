const path = require("path")
const data = require("@ahrjarrett/data")

console.log("data:", data)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("./src/templates/Post.js")

    graphql(
      `
        {
          allOrgContent(limit: 5) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      const { edges } = result.data.allOrgContent

      edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}
