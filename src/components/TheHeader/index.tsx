import React from "react"
import styles from "./styles.module.scss"

import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { ComponentsTheHeaderQuery } from "../../../types/graphql-types"

export type Props = {
  title: string
}

export const TheHeader: React.FC<Props> = (props: Props) => {
  const data: ComponentsTheHeaderQuery = useStaticQuery(graphql`
    query ComponentsTheHeader {
      placeholderImage: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <h1>
        {props.title}
        <Img
          className={styles.icon}
          fluid={data.placeholderImage!.childImageSharp!.fluid as FluidObject}
        />
      </h1>
    </header>
  )
}
