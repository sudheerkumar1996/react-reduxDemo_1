import{BUY_CAKE} from './cake.type';
export const BuyCake = (number=1) =>{
    return{
    type : BUY_CAKE,
    payload:number
    }
}