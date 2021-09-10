import { ActionType } from "../../../lib/constant";

const intialState={
    userInfo:{},
  
}


const UserReducer=(state=intialState,action)=>{
    
    switch(action.type){
        case(ActionType.AUTH_USER):{
            return {...state,userInfo:action.payload}
           
        }
        default:
            return state;
    }
}

export default UserReducer






