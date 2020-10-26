import { GRID } from 'typings'
import identifySquare from '.'

describe('identifySquare', () => {
  it('returns the top left square when given a row and column inside of it', () => {
    let grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 4, 2, 7, 8, 5, 6],
    ]

    expect(identifySquare({ col: 4, grid, row: 1 })).toStrictEqual([
      [6, 5, 1],
      [2, 8, 9],
      [7, 3, 4],
    ])

    expect(identifySquare({ col: 5, grid, row: 5 })).toStrictEqual([
      [8, 4, 5],
      [1, 9, 2],
      [3, 7, 6],
    ])

    expect(identifySquare({ col: 8, grid, row: 6 })).toStrictEqual([
      [2, 3, 9],
      [7, 1, 4],
      [8, 5, 6],
    ])
  })
})
