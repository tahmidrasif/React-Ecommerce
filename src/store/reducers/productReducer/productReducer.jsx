import { ActionType } from "../../../lib/constant"

const intialState={
    productList:[]
}


const ProductReducer=(state=intialState,action)=>{
    switch(action.type){
        case(ActionType.PRODUCT_LIST):
            return {...state,productList:action.payload}
        default:
            return state
    }
}
export default ProductReducer