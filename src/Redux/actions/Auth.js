import axios from "axios"

const LoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

const LoginSucces = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

export const AuthLogin = (formData) => {
    return (dispatch) => {
        dispatch(LoginRequest())
        axios({
            method: "POST",
            url: "http://localhost:3000/api/v1/auth/login",
            data: {
                email: formData.email,
                password: formData.password
            }
        })
        .then ((res) => {
            dispatch(LoginSucces(res.data.data))
        })
        .catch((err)=> {
            dispatch(LoginError(err.response.data))
        })
    }
}

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}
