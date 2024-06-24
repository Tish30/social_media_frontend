import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCEESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCEESS } from "./auth.actionType";
import { API_BASE_URL } from "../../Config/api";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);

        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
        }
        console.log("Login success", data);

        dispatch({ type: LOGIN_SUCEESS, payload: data.jwt });
    } catch (error) {
        console.error("Error logging in:", error.response.data); // Log detailed error message
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data }); // Dispatch error payload
    }
}

export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST }); // Corrected to REGISTER_REQUEST
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);

        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
        }
        console.log("Register", data);

        dispatch({ type: REGISTER_SUCEESS, payload: data.jwt }); // Corrected to REGISTER_SUCEESS
    } catch (error) {
        console.error("----------", error);
        dispatch({ type: REGISTER_FAILURE, payload: error }); // Corrected to REGISTER_FAILURE
    }
}







// import axios from "axios"

// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCEESS } from "./auth.actionType";
// import { API_BASE_URL } from "../../Config/api";

// export const loginUserAction =(loginData)=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         // eslint-disable-next-line no-template-curly-in-string
//         const{data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData);

//         if(data.jwt){
//             localStorage.setItem('jwt',data.jwt);
//         }
//         console.log("Login success",data);

//         dispatch({type:LOGIN_SUCEESS ,payload:data.jwt})
//     }
//     catch(error){
//         console.error("----------",error);
//         dispatch({type:LOGIN_FAILURE,payload:error});

//     }
// }


// export const registerUserAction =(loginData)=>async(dispatch)=>{
//     dispatch({type:LOGIN_REQUEST})
//     try{
//         // eslint-disable-next-line no-template-curly-in-string
//         const{data}=await axios.post(`${API_BASE_URL}/auth/signup`,loginData);

//         if(data.jwt){
//             localStorage.setItem('jwt',data.jwt);
//         }
//         console.log("Register",data);
//         dispatch({type:LOGIN_SUCEESS ,payload:data.jwt})
//     }
//     catch(error){
//         console.error("----------",error);
//         dispatch({type:LOGIN_FAILURE,payload:error});

//     }
// }