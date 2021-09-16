
import axios from "axios"
import { useHistory } from "react-router"
import { ActionType, GlobalConstant } from "../../../lib/constant"



export const CartListAction = (cart) => {

    console.log(cart, '=== in cart Action')
    return (
        {
            type: ActionType.CART_LIST,
            payload: cart
        }
    )
}
export  const CartTotalItem=(total)=>{
    return (
        {
            type: ActionType.CART_LIST_COUNT,
            payload: total
        }
    )
}


export const currentCartProductAction = (product) => {

    return (
        {
            type: ActionType.CART_PRODUCT,
            payload: product
        }
    )
}

export const GetAllCartList=(token)=>{
    return (
        async (dispatch) => {
            const AuthStr = 'bearer '.concat(token);
            let response = await axios.get(GlobalConstant.BASE_URL + '/cart', { headers: { Authorization: AuthStr } })
            if (response.data.status!=='error') {
                const productArr = response.data.products;

                dispatch(CartListAction(productArr))
            }
        }
    )
}

export  const GetCartListCount=(token)=>{
    return (
        async (dispatch) => {
            const AuthStr = 'bearer '.concat(token);
            let response = await axios.get(GlobalConstant.BASE_URL + '/cart', { headers: { Authorization: AuthStr } })
            if (response.data.status!=='error') {
                const productArr = response.data.products;
                let total=0;
                console.log('in Cart List Count Action')
                productArr.map((item) =>(
                   total+= parseInt(item.quantity)
                ))
                dispatch(CartTotalItem(total))
            }
        }
    )
}

export const setProductToCartAction = (product, token, operation) => {


    return (
        async (dispatch) => {
            const AuthStr = 'bearer '.concat(token);
            let response = await axios.get(GlobalConstant.BASE_URL + '/cart', { headers: { Authorization: AuthStr } })

            if (response.data.status!=='error') {
                const productArr = response.data.products;

                // let productCounter=0;
                // productArr.map((item)=>{

                // })

                const filterProduct = productArr.find(x => x.productId._id === product._id);
                if (filterProduct) {
                    const currentProdId = filterProduct.productId._id;
                    let currentQty=0
                    if (operation === ActionType.PRODCUT_ADD) {
                         currentQty = parseInt(filterProduct.quantity) + 1;
                    }
                    else{
                        if(parseInt(filterProduct.quantity)!==0)
                        currentQty = parseInt(filterProduct.quantity) - 1;
                    }
                        // console.log(currentProdId, '====cart currentProdId');
                        // console.log(currentQty, '====cart currentQty');
                        let payload = {
                            product: { id: currentProdId, quantity: currentQty }
                        }
                        // console.log(payload,'==payload')
                        response = await axios.post(GlobalConstant.BASE_URL + '/cart', payload, { headers: { Authorization: AuthStr } });

                        if(response.statusText==='OK'){
                            alert('product added successfully to the cart if')
                        }
                    
                }
                else {
                    if (operation === ActionType.PRODCUT_ADD) {
                        let payload = {
                            product: { id: product._id, quantity: 1 }
                        }
                        response = await axios.post(GlobalConstant.BASE_URL + '/cart', payload, { headers: { Authorization: AuthStr } });

                        if(response.statusText==='OK'){
                            alert('product added successfully to the cart')
                        }
                    }
                }

            }
            else {
                if (operation === ActionType.PRODCUT_ADD) {
                    let payload = {
                        product: { id: product._id, quantity: 1 }
                    }
                    response = await axios.post(GlobalConstant.BASE_URL + '/cart', payload, { headers: { Authorization: AuthStr } });

                    if(response.statusText==='OK'){
                        alert('product added successfully to the cart')
                    }
      
                }
            }
            //if(response.data.length)
            //ispatch(CategoryAction(response.data))
            dispatch(GetCartListCount(token))
        }
    )
}

