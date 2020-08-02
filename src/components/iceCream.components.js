import React from 'react';
// import {store} from '../redux/store';
import {connect} from 'react-redux';
import {BuyIceCream} from '../redux';
function IceCreamContainer(props) {
    return(
        <div>
            <h2>Number of IceCream - {props.numberOfIceCream}</h2>
            <span>here react-redux connect component is used</span>
            <br></br>
            <button onClick={props.BuyIceCream}>Buy a Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numberOfIceCream: state.iceCream.NUMBER_OF_ICE_CREAM
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        BuyIceCream: ()=>dispatch(BuyIceCream())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(IceCreamContainer);   