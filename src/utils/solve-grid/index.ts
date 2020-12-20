import global from 'global'
import { GRID, GRID_INDEX, NUMBERS } from 'typings'
import { identifySquare, isFullGrid, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A recursive function to check all the possible combinations of numbers untill a solution si found
 * @param grid A 9x9 array containing values from 0-9
 */
function solveGrid(grid: GRID) {
    let row: GRID_INDEX = 0
    let col: GRID_INDEX = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9) as GRID_INDEX
        col = (i % 9) as GRID_INDEX

        if (grid[row][col] === 0) {
            for (let value of numbers) {
                const square = identifySquare({ col, grid, row })
                if (
                    !isInRow({ grid, row, value }) &&
                    !isInCol({ grid, col, value }) &&
                    !isInSquare({ square, value })
                ) {
                    grid[row][col] = value
                    if (isFullGrid({ grid })) {
                        global.counter++
                        break
                    } else if (solveGrid(grid)) return true
                }
            }
        }
    }

    grid[row][col] = 0
}

export default solveGrid
