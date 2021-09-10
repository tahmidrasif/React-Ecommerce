import { ActionType } from "../../../lib/constant"



export const UserAction=(user)=>{
    
    return(
        {
            type: ActionType.AUTH_USER,
            payload: user
        }
    )
} 







