import { REQUEST_POIS, RECEIVE_POIS } from "../constants/action-types";
import { REQUEST_LOCATION,ERROR_LOCATION,RECEIVE_LOCATION   } from "../constants/action-types";


const initialState = { data: [], location:[]};
  
  function dataReducer(state = initialState, action) {
    
    switch (action.type) {
      case REQUEST_POIS:
        state = Object.assign({}, state, {status: "waiting data"});
        break;
      case RECEIVE_POIS:
        state = Object.assign({}, state, {data: [...action.data],status: "received data"});
        break;

    }
    return state;
  }
 export function locationReducer(state = initialState, action) {
    
    switch (action.type) {
      case REQUEST_LOCATION:
        state = Object.assign({}, state, {...action.location,status: "waiting location"});
        break;
      case RECEIVE_LOCATION:
        state = Object.assign({}, state, {...action.location, status: "received location"});
        break;
    case ERROR_LOCATION:
        state = Object.assign({}, state, {status: "error location"});
        break;
    }
    return state;
  }
  
  export default dataReducer 