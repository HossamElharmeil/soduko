import reducer from 'reducers'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const configureStore = (initialState = {}) =>
  createStore(reducer, initialState, devToolsEnhancer({}))

export default configureStore
