import React from "react"
import styles from "./styles.module.scss"
import Img, { FluidObject } from "gatsby-image"

export type Props = {
  title: string
  image: FluidObject
}

export enum TestAttrs {
  Title = "Title",
}

export const TheHeader: React.FC<Props> = (props: Props) => (
  <header>
    <h1>
      <span data-test={TestAttrs.Title}>{props.title}</span>
      <Img className={styles.icon} fluid={props.image} />
    </h1>
  </header>
)
