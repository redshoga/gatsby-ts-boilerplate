import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ComponentsLinkListQuery } from "../../../types/graphql-types"

export const LinkList: React.FC = () => {
  const queryResult: ComponentsLinkListQuery = useStaticQuery(graphql`
    query ComponentsLinkList {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <h2>Links</h2>

      <ul>
        <li>
          <Link to="/">Index Page</Link>
        </li>
        <li>
          <Link to="/404">404 Page</Link>
        </li>
      </ul>

      <h2>Articles</h2>

      <ul>
        {queryResult.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter?.path!}>
            <Link to={edge.node.frontmatter?.path!}>
              {edge.node.frontmatter?.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
