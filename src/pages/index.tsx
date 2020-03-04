import React from "react"
import { DefaultLayout } from "../components/DefaultLayout"
import { SeoInfo } from "../components/SeoInfo"

export default () => {
  return (
    <DefaultLayout>
      <SeoInfo title="Home" />
      <section>
        <h2>HELLO INDEX</h2>
      </section>
    </DefaultLayout>
  )
}
