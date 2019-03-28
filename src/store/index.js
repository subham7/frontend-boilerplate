import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../reducers"

const exampleInitialState = {}


// export const actionTypes = {
//     TICK: 'TICK',
//     INCREMENT: 'INCREMENT',
//     DECREMENT: 'DECREMENT',
//     RESET: 'RESET'
//   }
// export const reducer = (state = exampleInitialState, action) => {
//     switch (action.type) {
//       case actionTypes.TICK:
//         return Object.assign({}, state, {
//           lastUpdate: action.ts,
//           light: !!action.light
//         })
//       case actionTypes.INCREMENT:
//         return Object.assign({}, state, {
//           count: state.count + 1
//         })
//       case actionTypes.DECREMENT:
//         return Object.assign({}, state, {
//           count: state.count - 1
//         })
//       case actionTypes.RESET:
//         return Object.assign({}, state, {
//           count: exampleInitialState.count
//         })
//       default:
//         return state
//     }
//   }
  
// export const serverRenderClock = isServer => dispatch => {
//     return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
//   }
  
//   export const startClock = dispatch => {
//     return setInterval(() => {
//       // Dispatch `TICK` every 1 second
//       dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//     }, 1000)
//   }
  
//   export const incrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.INCREMENT })
//   }
  
//   export const decrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.DECREMENT })
//   }
  
//   export const resetCount = () => dispatch => {
//     return dispatch({ type: actionTypes.RESET })
//   }
export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}