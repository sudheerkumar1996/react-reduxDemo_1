import React from 'react';
import {connect} from 'react-redux';
import { BuyCake, BuyIceCream} from '../redux';
function ItemConatiner(props){
    return(
        <div>
            <h2>Item -{props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCake :  state.iceCream.NUMBER_OF_ICE_CREAM
    return{
        item: itemState
    }
}
const mapDispatchToProps = (dispatch , ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(BuyCake())
    : () => dispatch(BuyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemConatiner);