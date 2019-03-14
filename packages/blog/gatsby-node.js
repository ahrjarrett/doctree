const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("./src/templates/Post.js");

    graphql(`
      {
        allOrgContent {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) console.log(result.errors);
      const { edges } = result.data.allOrgContent;

      edges.forEach(edge => {
        const { slug } = edge.node.fields;
        createPage({
          path: slug,
          component: blogPostTemplate,
          context: {
            slug
          }
        });
      });

      resolve();
    });
  });
};
