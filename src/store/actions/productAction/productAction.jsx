import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"


export const ProductAction = (products) => {
  console.log(products, '===products thunk')
  return (
    {
      type: ActionType.PRODUCT_LIST,
      payload: products
    }
  )
}

export const GetProductList = () => {
  return async (dispatch) => {

    const response = await axios.get(GlobalConstant.BASE_URL + '/products')

    if (response.data.length)
      dispatch(ProductAction(response.data))

  }
}