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
export const ProductInsertAction = (product) => {
  return (
    {
      type: ActionType.PRODUCT_INSERT,
      payload: product
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
    console.log(id, '===products by category axios')
    const response = await axios.get(GlobalConstant.BASE_URL + '/products/category/' + id)
    console.log(response, '===products by category axios')
    if (response.data.length)
      dispatch(ProductAction(response.data))

  }
}

export const InsertProductAction = (product, token) => {
  return async (dispatch) => {
    //console.log(product, '===product parameter in insert')
    let payload = {
      title: product.title,
      price: parseFloat(product.price),
      description: product.description,
      image: product.image,
      stock: parseFloat(product.stock),
      category: {
        _id: product.category,
      }
    }
    try {
      const AuthStr = 'bearer '.concat(token);
      const response = await axios.post(GlobalConstant.BASE_URL + '/products', payload, { headers: { Authorization: AuthStr } });
      console.log(response, '===products inset')
      if (response.data._id) {

         dispatch(ProductInsertAction(response.data))
         alert('Product added successfully')

      }
      else {
        alert('Error in inserting product ')
      }
    }
    catch (e) {
      alert('Error in inserting product ')
      console.log(e, '===error')
      
    }
  }
}