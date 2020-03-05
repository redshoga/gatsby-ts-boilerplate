import React from "react"
import { shallow } from "enzyme"
import { TheHeader, TestAttrs } from "./index"
import { select } from "../../test/utils"
import { icon } from "../../test/mocks"

describe("Header", () => {
  const sampleTitle = "sample title 😻"
  const shallowWrapper = shallow(<TheHeader title={sampleTitle} image={icon} />)

  test("The props title renders correctly", () => {
    expect(shallowWrapper.find(select(TestAttrs.Title)).text()).toBe(
      sampleTitle
    )
  })
})
