class Point {
  x: number
  y: number
  drawPoint() {
    // .. logic for drawPoint
  }

  getDistance() {
    //... logic for getDistance
  }
}

// We don't need the bottom anymore.
let drawPoint = (point: Point) => {
  // expects x and y as numbers
}

let getDistance = (pointA: Point, PB: Point) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2,
})
