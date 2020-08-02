import axios from 'axios';
import {FETCHING_USERS_REQUEST,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE
} from './user.types';

export const fetching_users_request = () => {
    return{
        type: FETCHING_USERS_REQUEST
    }  
}
 const fetching_users_success = users => {
    return{
      type: FETCHING_USERS_SUCCESS  ,
      payload: users
    }  
}
const fetching_users_failure = error => {
    return {
            type: FETCHING_USERS_FAILURE,
            payload: error
    }
}

export const fetchUser = () =>{
    return (dispatch) =>{
        dispatch(fetching_users_request())
        axios.get('https://jsonplaceholder.typicode.com/users').then (response =>{
            const users=response.data
            dispatch(fetching_users_success(users))
        }).catch(error =>{

           const errorMsg=error.message
            dispatch(fetching_users_failure(errorMsg))
        })
    }
}
