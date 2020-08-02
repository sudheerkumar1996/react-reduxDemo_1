import {BUY_CAKE} from './cake.type';
const initial_state ={
    numberOfCake: 10
}
const cakeReducer=(state=initial_state,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake: state.numberOfCake-action.payload
            }
        default:
            return state
    }
}

export default cakeReducer;