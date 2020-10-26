import { GRID, GRID_INDEX, SQUARE } from 'typings'

interface IInput {
  col: GRID_INDEX
  grid: GRID
  row: GRID_INDEX
}

/**
 * A function that returns a soduko square from inside a soduko grid given a cell identified by a row and column
 * @param input The column index, the actual grid and the row index
 */
function identifySquare({ col, grid, row }: IInput): SQUARE {
  let square = []

  let squareStartRow = Math.floor(row / 3) * 3
  let squareStartCol = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    square.push([
      grid[squareStartRow + i][squareStartCol],
      grid[squareStartRow + i][squareStartCol + 1],
      grid[squareStartRow + i][squareStartCol + 2],
    ])
  }

  return square as SQUARE
}

export default identifySquare
