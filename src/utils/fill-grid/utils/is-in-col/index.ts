import { GRID, GRID_INDEX, NUMBERS } from 'typings'

interface IInput {
  col: GRID_INDEX
  grid: GRID
  value: NUMBERS
}

/**
 * A function that checks if a given value exists within a given column
 * @param input Object containing a column index, 9x9 soduko grid and value
 */
function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) return true
  }

  return false
}

export default isInCol
