import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCEESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCEESS } from "./auth.actionType";

const initializeState={
    jwt:null,
    error:null,
    loading:false
}

export const authReducer=(state=initializeState,action)=>{

    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return{...state,loading:true,error:null}
        case LOGIN_SUCEESS:
        case REGISTER_SUCEESS:
            return{...state,jwt:action.payload, loading:false,error:null}
            
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}