import path from "path"
import { GatsbyNode } from "gatsby"
import { GatsbyNodeQuery } from "../../types/graphql-types"

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const result = await graphql<GatsbyNodeQuery>(`
    query GatsbyNode {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data!.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter!.path || "",
      component: path.resolve("src/templates/BlogTemplate/index.tsx"),
      context: {},
    })
  })
}
