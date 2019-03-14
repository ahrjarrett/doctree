const path = require("path")
// const data = require("@ahrjarrett/data")

// console.log("data:", data)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("./src/templates/Post.js")

    graphql(
      `
        {
          allGithubFile(
            filter: { relativePath: { regex: "/^packages/data/src/org/+/" } }
          ) {
            edges {
              node {
                base
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      const { edges } = result.data.allGithubFile

      edges.forEach(edge => {
        createPage({
          path: `/` + edge.node.base,
          component: blogPostTemplate,
          context: {
            base: edge.node.base,
          },
        })
      })

      resolve()
    })
  })
}
