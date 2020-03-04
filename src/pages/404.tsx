import React from "react"
import { DefaultLayout } from "../components/DefaultLayout"
import { SeoInfo } from "../components/SeoInfo"

export default () => (
  <DefaultLayout>
    <SeoInfo title="404: Not found" />
    <section>
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </DefaultLayout>
)
