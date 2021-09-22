import { ActionType } from "../../../lib/constant";

const intialState={
    orderNumber:{},
    isLoaderVisible:false
}


const OtherReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.ORDER_NUMBER):{
            return {...state,orderNumber:action.payload}
           
        }
        case(ActionType.IS_LOADER):{
            return {...state,isLoaderVisible:action.payload}
           
        }

        default:
            return state;
    }
}

export default OtherReducer