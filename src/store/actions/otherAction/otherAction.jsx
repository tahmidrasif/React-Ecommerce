
import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"



export const OrderNumberAction = (orderno) => {

    return (
        {
            type: ActionType.ORDER_NUMBER,
            payload: orderno
        }
    )
}
