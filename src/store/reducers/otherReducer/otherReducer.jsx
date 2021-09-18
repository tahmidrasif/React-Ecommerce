import { ActionType } from "../../../lib/constant";

const intialState={
    orderNumber:{},
}


const OtherReducer=(state=intialState,action)=>{

    switch(action.type){
        case(ActionType.ORDER_NUMBER):{
            return {...state,orderNumber:action.payload}
           
        }
    
        default:
            return state;
    }
}

export default OtherReducer