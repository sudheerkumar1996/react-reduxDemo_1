import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './icecream/iceCream.reducer';
import userReducer from '../redux/user/user.reducer';

 const RootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: IceCreamReducer,
    user: userReducer
})
export default RootReducer;