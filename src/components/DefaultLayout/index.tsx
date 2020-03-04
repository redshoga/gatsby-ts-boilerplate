import React from "react"
import styles from "./styles.module.scss"
import { LinkList } from "../LinkList"
import { useStaticQuery, graphql } from "gatsby"
import { TheHeader } from "../TheHeader"
import { ComponentsDefaultLayoutQuery } from "../../../types/graphql-types"

export type Props = {
  children: React.ReactNode
}

export const DefaultLayout = (props: Props) => {
  const data: ComponentsDefaultLayoutQuery = useStaticQuery(graphql`
    query ComponentsDefaultLayout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <TheHeader title={data.site?.siteMetadata?.title || "No site name"} />

      <main>{props.children}</main>

      <LinkList />

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://github.com/redshoga/gatsby-ts-boilerplate">
          redshoga/gatsby-ts-boilerplate
        </a>
      </footer>
    </div>
  )
}
