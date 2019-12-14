import React from "react"

export function useShapes(initialShapes, timeout) {
  const [shapes, setShapes] = React.useState(initialShapes)
  const [shouldReturnShapes, setShouldReturnShapes] = React.useState(!timeout)
  React.useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        setShouldReturnShapes(true)
      }, timeout)
    }
  }, [timeout, setShapes, initialShapes])
  return shouldReturnShapes ? [shapes] : [[]]
}
