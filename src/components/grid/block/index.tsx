import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer, selectBlockAction } from 'reducers'
import { AnyAction } from 'redux'
import { GRID_INDEX, N } from 'typings'
import { Container } from './styles'

interface IProps {
  colIndex: GRID_INDEX
  rowIndex: GRID_INDEX
}

interface IState {
  value: N
  isActive: boolean
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
  }))

  function handleClick() {
    if (!state.isActive) dispatch(selectBlockAction([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? null : state.value}
    </Container>
  )
}

export default Block
