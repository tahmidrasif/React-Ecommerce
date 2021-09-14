import { ActionType } from "../../../lib/constant";

const intialState={
    cartList:[],
    currentCartProduct:{}
}


const CartReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.CATEGORY_LIST):{
            return {...state,cartList:action.payload}
           
        }
        case(ActionType.CURRENT_CATEGORY):{

            return {...state,currentCartProduct:action.payload}
           
        }
        default:
            return state;
    }
}

export default CartReducer