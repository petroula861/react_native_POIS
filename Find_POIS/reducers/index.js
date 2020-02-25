//Reducers produce the state of an application. It takes two parameters: the current state and action 
//When an action is dispatched, the store forwards a message (the action object) to the reducer.
//Depending on the action type, the reducer produces the next state, eventually merging the action payload into the new state.

import { combineReducers, createStore } from 'redux'
import dataReducer,{locationReducer } from './reducers'

const rootReducer = combineReducers({
  dataReducer,
  locationReducer
})

export default rootReducer