import { ActionType } from "../../../lib/constant";

const intialState={
    categoryList:[],
    currentCategory:{}
}


const CategoryReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.CATEGORY_LIST):{
            return {...state,categoryList:action.payload}
           
        }
        case(ActionType.CURRENT_CATEGORY):{

            return {...state,currentCategory:action.payload}
           
        }
        default:
            return state;
    }
}

export default CategoryReducer