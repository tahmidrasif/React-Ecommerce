
import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"



export const CartAction = (cart) => {

    console.log(cart, '=== in cart Action')
    return (
        {
            type: ActionType.CART_LIST_COUNT,
            payload: cart
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

export const setProductToCartAction = (product, token, operation) => {

    return (
        async (dispatch) => {
            const AuthStr = 'bearer '.concat(token);
            let response = await axios.get(GlobalConstant.BASE_URL + '/cart', { headers: { Authorization: AuthStr } })
            console.log(response.data, '=== cart Get response')
            if (response.data.length) {
                const productArr = response.data.products;
                console.log(productArr, '=== cart Get Arr')
                let productCounter=0;
                productArr.map((item)=>{
                    console.log(item.quantity, '=== cart Get response')
                })

                const filterProduct = productArr.find(x => x.productId._id === product._id);
                if (filterProduct) {
                    const currentProdId = filterProduct.productId._id;
                    if (operation === ActionType.PRODCUT_ADD) {
                        const currentQty = parseInt(filterProduct.quantity) + 1;
                        // console.log(currentProdId, '====cart currentProdId');
                        // console.log(currentQty, '====cart currentQty');
                        let payload = {
                            product: { id: currentProdId, quantity: currentQty }
                        }
                        // console.log(payload,'==payload')
                        response = await axios.post(GlobalConstant.BASE_URL + '/cart', payload, { headers: { Authorization: AuthStr } });
                        console.log(response, '=== cart post response')
                        if(response.statusText==='OK'){
                            alert('product added successfully to the cart if')
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
                    console.log(response, '=== cart post response else')
                    if(response.statusText==='OK'){
                        alert('product added successfully to the cart')
                    }
                }
            }
            //if(response.data.length)
            //ispatch(CategoryAction(response.data))
        }
    )
}

