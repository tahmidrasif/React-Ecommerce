import { ActionType } from "../../../lib/constant";

const intialState={
    cartList:[],
    currentCartProduct:{},
    cartCount:0
}


const CartReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.CART_LIST):{
            return {...state,cartList:action.payload}
           
        }
        case(ActionType.CART_PRODUCT):{

            return {...state,currentCartProduct:action.payload}
           
        }
        case(ActionType.CART_LIST_COUNT):{

            return {...state,cartCount:action.payload}
           
        }
        default:
            return state;
    }
}

export default CartReducer