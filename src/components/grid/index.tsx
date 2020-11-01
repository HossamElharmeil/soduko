import React, { Dispatch, useCallback, useEffect } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { createGridAction, IReducer, selectBlockAction } from 'reducers'
import { AnyAction } from 'redux'
import { BLOCK_COORDS, GRID_INDEX } from 'typings'
import Block from './block'
import { Container, Row } from './styles'

interface IState {
  selectedBlock?: BLOCK_COORDS
}

const Grid: React.FC = () => {
  const state = useSelector<IReducer, IState>((state) => ({
    selectedBlock: state.selectedBlock,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => {
    dispatch(createGridAction())
  }, [dispatch])
  useEffect(() => {
    create()
  }, [create])

  function moveUp() {
    console.log('up')
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlockAction([
          (state.selectedBlock[0] - 1) as GRID_INDEX,
          state.selectedBlock[1] as GRID_INDEX,
        ])
      )
    }
  }

  function moveRight() {
    console.log('right')
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlockAction([
          state.selectedBlock[0] as GRID_INDEX,
          (state.selectedBlock[1] + 1) as GRID_INDEX,
        ])
      )
    }
  }

  function moveDown() {
    console.log('down')
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlockAction([
          (state.selectedBlock[0] + 1) as GRID_INDEX,
          state.selectedBlock[1] as GRID_INDEX,
        ])
      )
    }
  }

  function moveLeft() {
    console.log('left')
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlockAction([
          state.selectedBlock[0] as GRID_INDEX,
          (state.selectedBlock[1] - 1) as GRID_INDEX,
        ])
      )
    }
  }

  useMousetrap('up', moveUp)
  useMousetrap('right', moveRight)
  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as GRID_INDEX}
                  rowIndex={rowIndex as GRID_INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
