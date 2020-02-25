//Reducers produce the state of an application. It takes two parameters: the current state and action 
//When an action is dispatched, the store forwards a message (the action object) to the reducer.
//Depending on the action type, the reducer produces the next state, eventually merging the action payload into the new state.
// import { REQUEST_POIS, RECEIVE_POIS,REQUEST_LOCATION } from "../constants/action-types";


// const initialState = { data: [], status:"",location:[],status2:""};
  
//   function rootReducer(state = initialState, action) {
    
//     switch (action.type) {
//       case REQUEST_POIS:
//         state = Object.assign({}, state, {status: "waiting"});
//         break;
//       case RECEIVE_POIS:
//         state = Object.assign({}, state, {data: [...action.data], status: "received"});
//         break;

//     }
//     return state;
//   }
//   function locationReducer(state = initialState, action2) {
    
//     switch (action2.type) {
//       case REQUEST_LOCATION:
//         state = Object.assign({}, state, {status2: "waiting"});
//         break;
//       case RECEIVE_LOCATION:
//         state = Object.assign({}, state, {location: [...action2.location], status2: "received"});
//         break;
//     case ERROR_LOCATION:
//         state = Object.assign({}, state, {status2: "error"});
//         break;
//     }
//     return state;
//   }
  
//   export default rootReducer;locationReducer;

import { combineReducers, createStore } from 'redux'
import dataReducer,{locationReducer } from './reducers'

const rootReducer = combineReducers({
  dataReducer,
  locationReducer
})

export default rootReducer