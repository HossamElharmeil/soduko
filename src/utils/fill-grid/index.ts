import { GRID, GRID_INDEX, NUMBERS, SQUARE } from 'typings'
import { isFullGrid, isInCol, isInRow, isInSquare, shuffle } from './utils'
import identifySquare from './utils/indetify-square'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9*9 soduko grid
 */
function fillGrid(grid: GRID) {
  let row: GRID_INDEX = 0
  let col: GRID_INDEX = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9) as GRID_INDEX
    col = (i % 9) as GRID_INDEX

    if (grid[row][col] === 0) {
      shuffle(numbers)
      const square: SQUARE = identifySquare({ col, grid, row })

      for (let value of numbers) {
        if (
          !isInRow({ grid, row, value }) &&
          !isInCol({ grid, col, value }) &&
          !isInSquare({ square, value })
        ) {
          grid[row][col] = value

          if (isFullGrid({ grid })) {
            return true
          } else if (fillGrid(grid)) {
            return true
          }
        }
      }
      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid
