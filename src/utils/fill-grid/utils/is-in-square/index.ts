import { NUMBERS, SQUARE } from 'typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

/**
 * A function that checks if a given value exists within the given 3x3 square
 * @param input An object containing a 3x3 square and a value
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
