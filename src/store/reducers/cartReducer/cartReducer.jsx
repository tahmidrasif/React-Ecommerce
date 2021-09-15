import { ActionType } from "../../../lib/constant";

const intialState={
    cartListCount:[],
    currentCartProduct:{}
}


const CartReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.CART_LIST_COUNT):{
            return {...state,cartListCount:action.payload}
           
        }
        case(ActionType.CART_PRODUCT):{

            return {...state,currentCartProduct:action.payload}
           
        }
        default:
            return state;
    }
}

export default CartReducer