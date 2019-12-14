import React from "react"
import { render } from "@testing-library/react"
import App from "../app"

test("renders", () => {
  render(<App />)
})

test("renders a blue circle and a red circle but NOT a purple circle", () => {
  const { getByLabelText, queryByLabelText } = render(<App />)
  expect(getByLabelText("red circle")).toBeInTheDocument()
  expect(getByLabelText("blue circle")).toBeInTheDocument()
  expect(queryByLabelText("purple circle")).toBeNull()
})
// First, write an additional test that adds a timeout to the App component of 30 ms.
// Second, in that test, assert that red and blue circles appear, and that there is no purple circle.
test("renders a blue circle and a red circle but NOT a purple circle with a timeout", async () => {
  const { findByLabelText, queryByLabelText } = render(<App timeout={30} />)
  expect(queryByLabelText("red circle")).toBeNull()
  expect(queryByLabelText("blue circle")).toBeNull()

  expect(await findByLabelText("red circle")).toBeInTheDocument()
  expect(await findByLabelText("blue circle")).toBeInTheDocument()
})
