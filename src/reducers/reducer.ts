import { AnyAction } from 'redux'
import { createGrid } from 'utils'
import { IReducer } from './interfaces'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createGrid(),
      }

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.block,
      }

    default:
      return state
  }
}

export default reducer
