import { GRID, NUMBERS } from 'typings'

interface IInput {
  col: number
  grid: GRID
  value: NUMBERS
}

function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) return true
  }

  return false
}

export default isInCol
