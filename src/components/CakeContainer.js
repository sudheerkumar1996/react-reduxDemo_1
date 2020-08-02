import React from 'react';
// import {store} from '../redux/store';
import {connect} from 'react-redux';
import {BuyCake} from '../redux';
function CakeContainer(props) {
    return(
        <div>
            <h2>Number of cakes - {props.numberOfCake}</h2>
            <span>here react-redux connect component is used</span>
            <br></br>
            <button onClick={props.BuyCake}>Buy a Cake</button>
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
        BuyCake: ()=>dispatch(BuyCake())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(CakeContainer);   