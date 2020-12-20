import { GRID } from 'typings'

interface IInput {
  grid: GRID
}

/**
 * A function that checks if the soduko grid cotnains any zeros
 * @param input A 9x9 soduko grid
 */
function isFullGrid({ grid }: IInput): boolean {
  return !grid.flat(1).includes(0)
}

export default isFullGrid
