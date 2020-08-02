import { BUY_ICE_CREAM } from './iceCream.types'
const INITIAL_STATE={
    NUMBER_OF_ICE_CREAM:20
}
const IceCreamReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case BUY_ICE_CREAM:
            return{
                ...state,
                NUMBER_OF_ICE_CREAM:state.NUMBER_OF_ICE_CREAM-1
            }
        default:
            return state
    }
}
export default IceCreamReducer;