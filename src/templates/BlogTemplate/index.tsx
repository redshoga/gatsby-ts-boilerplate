import React from "react"
import styles from "./styles.module.scss"
import { graphql } from "gatsby"
import { TemplateBlogTemplateQuery } from "../../../types/graphql-types"
import { DefaultLayout } from "../../components/DefaultLayout"

export const pageQuery = graphql`
  query TemplateBlogTemplate($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export type Props = {
  data: TemplateBlogTemplateQuery
  location: Location
}

const BlogTemplate: React.FC<Props> = (props: Props) => (
  <DefaultLayout>
    <article className={styles.container}>
      <h2>{props.data.markdownRemark?.frontmatter?.title}</h2>
      <h3>{props.data.markdownRemark?.frontmatter?.date}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark?.html! }}
      />
    </article>
  </DefaultLayout>
)

export default BlogTemplate
