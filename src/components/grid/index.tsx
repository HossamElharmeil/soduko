import React, { Dispatch, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createGridAction } from 'reducers'
import { AnyAction } from 'redux'
import { GRID_INDEX } from 'typings'
import Block from './block'
import { Container, Row } from './styles'

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => {
    dispatch(createGridAction())
  }, [dispatch])
  useEffect(() => {
    create()
  }, [create])
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
