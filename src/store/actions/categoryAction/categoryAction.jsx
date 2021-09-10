
import axios from "axios"
import { ActionType, GlobalConstant } from "../../../lib/constant"



export const CategoryAction = (categories) => {

    return (
        {
            type: ActionType.CATEGORY_LIST,
            payload: categories
        }
    )
}

export const GetCategoryList = () => {
    return (
        async (dispatch) => {
            const response = await axios.get(GlobalConstant.BASE_URL + '/category')
            console.log(response, '===category thunk')
            if(response.data.length)
            dispatch(CategoryAction(response.data))
        }
    )
}

