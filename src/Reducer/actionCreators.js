const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = (data) =>{
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}

export const loginSuccess = (data) =>{
    return {
        type:LOGIN_SUCCESS ,
        payload: data
    }
}

export const loginFailure = () =>{
    return {
        type: LOGIN_FAILURE,

    }
}