import React from "react"
import { TheHeader } from "./index"
import { icon } from "../../test/mocks"

export default {
  title: "components/TheHeader",
  component: TheHeader,
}

export const Default = () => <TheHeader title="sample" image={icon} />
