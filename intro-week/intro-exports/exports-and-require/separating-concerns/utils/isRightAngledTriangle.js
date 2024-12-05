function isRightAngledTriangle(sideA, sideB, sideC) {

const {squareNumber} = require('./utils/mathFunctions')

  const sideASquared = squareNumber(sideA)
  const sideBSquared = squareNumber(sideB)
  const sideCSquared = squareNumber(sideC)

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;

