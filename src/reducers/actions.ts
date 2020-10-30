import { Action, AnyAction } from 'redux'
import { BLOCK_COORDS } from 'typings'
import * as types from './types'

export const createGridAction = (): Action => ({ type: types.CREATE_GRID })

export const selectBlockAction = (block: BLOCK_COORDS): AnyAction => ({
  block,
  type: types.SELECT_BLOCK,
})
