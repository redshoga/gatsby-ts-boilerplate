import { select } from "./testUitls"

describe("testUtils", () => {
  test("select()", () => {
    expect(select("sample")).toBe('[data-test="sample"]')
  })
})
