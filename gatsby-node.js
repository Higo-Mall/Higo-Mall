// One item, one html, with item.tsx in src/templates
// const path = require(`path`);
// exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;
//     if (node.internal.type === `MysqlItem`) {
//         // const slug = createFilePath({ node, getNode, basePath: `pages` })
//         const slug = "pages/item/" + node.mysqlId;
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug,
//         });
//     }
// };
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;

//     const result = await graphql(`
//         query {
//             allMysqlItem {
//                 nodes {
//                     fields {
//                         slug
//                     }
//                 }
//             }
//         }
//     `);
//     result.data.allMysqlItem.nodes.forEach(({ fields }) => {
//         const slug = fields.slug;
//         createPage({
//             path: slug,
//             component: path.resolve(`./src/templates/item.tsx`),
//             context: {
//                 // Data passed to context is available
//                 // in page queries as GraphQL variables.
//                 slug: slug,
//             },
//         });
//     });
// };
