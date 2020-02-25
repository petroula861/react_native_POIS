import { REQUEST_LOCATION ,RECEIVE_LOCATION,ERROR_LOCATION  } from "../constants/action-types";



export function findlocation(){
    return (dispatch)=>{
        dispatch({ type: REQUEST_LOCATION })
        navigator.geolocation.getCurrentPosition(
            position => 
                {const location = position
                 dispatch({ type: RECEIVE_LOCATION ,location:{flag:"true",location:location}})}
            ,error => dispatch({ type: ERROR_LOCATION ,location:{flag:"false",location:""}})
        )
    }
}

export default findlocation;