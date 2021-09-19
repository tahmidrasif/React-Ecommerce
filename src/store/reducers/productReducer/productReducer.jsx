import { ActionType } from "../../../lib/constant"

const intialState = {
    productList: [],
    product: {}
}


const ProductReducer = (state = intialState, action) => {
    switch (action.type) {
        case (ActionType.PRODUCT_LIST):
            return { ...state, productList: action.payload }
        case (ActionType.PRODUCT_INSERT):
            return { ...state, product: action.payload }
        default:
            return state
    }
}
export default ProductReducer