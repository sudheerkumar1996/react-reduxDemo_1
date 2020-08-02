import React from 'react';
import {useSelector,useDispatch} from 'react-redux';    
import {BuyCake} from '../redux';

function HooksCakeContainer(props) {
   const numberOfCake= useSelector(state=>state.cake.numberOfCake)
   const dispatch=useDispatch()
    return(
        <div>
            <h2>Number_of_cakes - {numberOfCake}</h2>
            <span>Here react_redux Hooks is used</span>
            <br></br>
            <button onClick={()=>dispatch(BuyCake())}>Buy a Cake</button>
        </div>
    )
}
export default HooksCakeContainer;
