import React from "react"

const Square = props => {
  const { length, backgroundColor } = props
  return (
    <div
      style={{ width: length, height: length, backgroundColor }}
      data-testid={`${backgroundColor}-square`}
    />
  )
}

Square.defaultProps = {
  length: 75,
  backgroundColor: "purple"
}

export default Square
