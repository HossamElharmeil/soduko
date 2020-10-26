import { GRID } from 'typings'
import fillGrid from '.'

describe('fillGrid', () => {
  it('fills a grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    fillGrid(grid)

    expect(grid.flat(1).includes(0)).toBeFalsy()
    for (let value of grid.flat(1)) {
      expect(value).toBeGreaterThanOrEqual(1)
      expect(value).toBeLessThanOrEqual(9)
    }
  })

  it('fills a partially full grid', () => {
    const grid: GRID = [
      [7, 4, 0, 9, 0, 3, 1, 8, 6],
      [9, 3, 5, 6, 1, 8, 7, 2, 4],
      [8, 6, 1, 0, 0, 2, 9, 3, 5],
      [4, 5, 6, 8, 7, 9, 2, 1, 3],
      [3, 1, 9, 2, 0, 0, 4, 0, 8],
      [2, 8, 7, 4, 3, 1, 6, 5, 9],
      [1, 2, 0, 5, 0, 6, 8, 4, 7],
      [5, 0, 4, 1, 8, 7, 0, 0, 2],
      [6, 7, 8, 0, 2, 4, 0, 9, 1],
    ]

    fillGrid(grid)

    expect(grid.flat(1).includes(0)).toBeFalsy()
    for (let value of grid.flat(1)) {
      expect(value).toBeGreaterThanOrEqual(1)
      expect(value).toBeLessThanOrEqual(9)
    }
  })
})
