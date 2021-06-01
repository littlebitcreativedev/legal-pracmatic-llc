const path = require(`path`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/es/)) {
//     // eslint-disable-next-line no-param-reassign
//     page.context.layout = 'spanish';
//     createPage(page);
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/services-views.jsx`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: `/services${slug}`,
    });
  }
};
