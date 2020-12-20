import global from 'global'
import { GRID } from 'typings'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'

/**
 * Removes numbers from a 9x9 grid to create a Soduko puzzle
 * @param grid 9x9 Soduko grid
 * @param attempts Number of attempts to solve (higher means more difficult, default 5)
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while (grid[row][col] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        const gridCopy = copyGrid(grid)
        global.counter = 0
        solveGrid(gridCopy)

        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }
    }
    return grid
}

export default removeNumbers
