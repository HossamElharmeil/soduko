import { SQUARE } from 'typings'
import isInSquare from '.'

describe('isInSquare', () => {
  it('returns true if the value exists inside the square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 5 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('returns false when value does not exist inside the square', () => {
    const square: SQUARE = [
      [0, 2, 3],
      [4, 0, 6],
      [7, 8, 0],
    ]

    expect(isInSquare({ square, value: 1 })).toBeFalsy()
    expect(isInSquare({ square, value: 5 })).toBeFalsy()
    expect(isInSquare({ square, value: 9 })).toBeFalsy()
  })
})
