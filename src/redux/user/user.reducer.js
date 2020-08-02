import {FETCHING_USERS_REQUEST,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE
} from './user.types';

const initial_state = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state=initial_state,action) => {
    switch(action.type){
        case FETCHING_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
         
        case FETCHING_USERS_SUCCESS:
            return{
                loading: false,
                users:action.payload,
                error:''
            }
            
        case FETCHING_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default: return state
    }
}
export default userReducer;