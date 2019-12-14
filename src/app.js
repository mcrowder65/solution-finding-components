import React from "react"
import Circle from "./circle"
import shortid from "shortid"
import { useShapes } from "./use-shapes"

function App(props) {
  const [circles] = useShapes(
    [
      {
        dimensions: { diameter: 50 },
        backgroundColor: "red",
        id: shortid.generate()
      },
      {
        dimensions: { diameter: 150 },
        backgroundColor: "blue",
        id: shortid.generate()
      }
    ],
    props.timeout
  )
  return (
    <div>
      {circles.map((circle, index) => {
        return <Circle {...circle} key={circle.id} tabIndex={index + 1} />
      })}
    </div>
  )
}

App.defaultProps = {
  timeout: 0
}

export default App
