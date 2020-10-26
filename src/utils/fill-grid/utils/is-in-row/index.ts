import { GRID, GRID_INDEX, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: GRID_INDEX
  value: NUMBERS
}

/**
 * Check if a value exists in a row within a 9x9 grid
 * @param input Object with 9x9 grid, row index and  a value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow
