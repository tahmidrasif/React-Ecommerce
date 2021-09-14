import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"


export const ProductAction = (products) => {
 
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

export const GetProductByCategoryId = (id) => {
  return async (dispatch) => {
    console.log(id,'===products by category axios')
    const response = await axios.get(GlobalConstant.BASE_URL + '/products/category/'+id)
    console.log(response,'===products by category axios')
    if (response.data.length)
      dispatch(ProductAction(response.data))

  }
}