import React,{useState} from 'react';
// import {store} from '../redux/store';
import {connect} from 'react-redux';
import {BuyCake} from '../redux';
function CakeSearch(props) {
    const [number,setNumber]=useState(1)
    return(
        
        <div>
            <h2>Number of cakes - {props.numberOfCake}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>props.BuyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numberOfCake: state.cake.numberOfCake
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyCake: number=>dispatch(BuyCake(number))
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(CakeSearch);   