import { ActionType } from "../../../lib/constant";

const intialState={
    categoryList:[]
  
}


const CategoryReducer=(state=intialState,action)=>{
    
    switch(action.type){
        case(ActionType.CATEGORY_LIST):{
            return {...state,categoryList:action.payload}
           
        }
        default:
            return state;
    }
}

export default CategoryReducer