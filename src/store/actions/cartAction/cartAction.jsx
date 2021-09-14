
import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"



export const CartAction = (cart) => {

    console.log(cart,'=== in cart Action')
    return (
        {
            type: ActionType.CART_LIST,
            payload: cart
        }
    )
}


export const currentCartProductAction = (cart) => {

    return (
        {
            type: ActionType.CART_PRODUCT,
            payload: cart
        }
    )
}

