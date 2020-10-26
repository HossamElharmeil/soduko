import createGrid from '.'

describe('createGrid', () => {
  it('returns a new valid soduko grid', () => {
    const grid = createGrid()

    console.log(grid)

    expect(grid.flat(1).includes(0)).toBeFalsy()
    for (let value of grid.flat(1)) {
      expect(value).toBeGreaterThanOrEqual(1)
      expect(value).toBeLessThanOrEqual(9)
    }
  })
})
