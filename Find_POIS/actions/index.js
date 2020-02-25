
//  The type property drives how the state should change and it's always required by Redux. The payload property instead describes what should change, and might be omitted if you don't have new data to save in the store.
import { REQUEST_POIS, RECEIVE_POIS  } from "../constants/action-types";



export function getData() {
    return (dispatch)=>{
    dispatch({ type: REQUEST_POIS })
    fetch("https://warply.s3.amazonaws.com/data/test_pois.json")
      .then((response) => response.json())
      .then(data =>dispatch({ type: RECEIVE_POIS ,data:data}))
      .catch((error) => {
        dispatch({ type: RECEIVE_POIS, response: null, error:error.message });
      });
}}



export default getData()

