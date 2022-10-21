import { type } from "@testing-library/user-event/dist/type"
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils"
import axios from "axios"

const GetMoviesRequest = () => {
    return {
        type: "GET_MOVIES_REQUEST"
    }
}

const GetMoviesSucces = (data) => {
    return {
        type: "GET_MOVIES_SUCCESS",
        payload: data
    }
}

const GetMoviesError = (error) => {
    return {
        type: "GET_MOVIES_ERROR",
        payload: error
    }
}

export const GetMovies = (params) => {
    let page = params?.page ?? 1
    let limit = params?.limit ?? 5

    return (dispatch) => {
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/?${page ? `page=${page}` : ``}${limit ? `&limit=${limit}` : ``}`,
        })
            .then((res) => {
                dispatch(GetMoviesSucces(res.data.data))
            })
            .catch((err) => {
                dispatch(GetMoviesError(err.response))
            })
    }
}


const GetMoviesNSRequest = () => {
    return {
        type: "GET_MOVIES_NS"
    }
}


export const GetMoviesNS = () => {
    return (dispatch) => {
        dispatch(GetMoviesNSRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/`,
        })
            .then((res) => {
                dispatch(GetMoviesSucces(res.data.data))
            })
            .catch((err) => {
                dispatch(GetMoviesError(err.response))
            })
    }
}


const GetMoviesUCRequest = () => {
    return {
        type: "GET_MOVIES_UC"
    }
}


export const GetMoviesUC = () => {
    return (dispatch) => {
        dispatch(GetMoviesUCRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/`,
        })
            .then((res) => {
                dispatch(GetMoviesSucces(res.data.data))
            })
            .catch((err) => {
                dispatch(GetMoviesError(err.response))
            })
    }
}


const GetMoviesRequestbyId = () => {
    return {
        type: "GET_MOVIES_BY_ID"
    }
}


export const GetMoviesbyId = (id) => {
    return (dispatch) => {
        dispatch(GetMoviesRequestbyId())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/${id}`,
        })
            .then((res) => {
                dispatch(GetMoviesSucces(res))
            })
            .catch((err) => {
                dispatch(GetMoviesError(err.response))
            })
    }
}


const AddMoviesRequest = () => {
    return {
        type: "ADD_MOVIES_REQUEST"
    }
}

const AddMoviesSucces = (data) => {
    return {
        type: "ADD_MOVIES_SUCCESS",
        payload: data
    }
}

const AddMoviesError = (error) => {
    return {
        type: "ADD_MOVIES_ERROR",
        payload: error
    }
}

export const AddMovies = (formData, token) => {
    return (dispatch) => {
        dispatch(AddMoviesRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/`,
            data: formData,
            headers: {
                authorization: token
            }
        })
            .then((res) => {
                dispatch(AddMoviesSucces(res.data))
            })
            .catch((err) => {
                dispatch(AddMoviesError(err.response))
            })
    }
}



const UpdateMoviesRequest = () => {
    return {
        type: "UPDATE_MOVIES_REQUEST"
    }
}

const UpdateMoviesSucces = (data) => {
    return {
        type: "UPDATE_MOVIES_SUCCESS",
        payload: data
    }
}

const UpdateMoviesError = (error) => {
    return {
        type: "UPDATE_MOVIES_ERROR",
        payload: error
    }
}

export const UpdateMovies = (formData, token, id) => {
    return (dispatch) => {
        dispatch(UpdateMoviesRequest())
        axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/${id}`,
            data: formData,
            headers: {
                authorization: token
            }
        })
            .then((res) => {
                dispatch(UpdateMoviesSucces(res.data))
            })
            .catch((err) => {
                dispatch(UpdateMoviesError(err.response))
            })
    }
}


const DeleteMoviesRequest = () => {
    return {
        type: "DELETE_MOVIES_REQUEST"
    }
}

const DeleteMoviesSucces = (data) => {
    return {
        type: "DELETE_MOVIES_SUCCESS",
        payload: data
    }
}

const DeleteMoviesError = (error) => {
    return {
        type: "DELETE_MOVIES_ERROR",
        payload: error
    }
}

export const DeleteMovies = (id, token) => {
    return async (dispatch) => {
        dispatch(DeleteMoviesRequest(id))
        await axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/movie/${id}`,
            data: id,
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                dispatch(DeleteMoviesSucces(res.data))
            })
            .catch((err) => {
                dispatch(DeleteMoviesError(err))
            })
    }
}

