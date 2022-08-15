import { type } from "@testing-library/user-event/dist/type"
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
            url: `http://localhost:3000/api/v1/movie/?${page ? `page=${page}`:``}${limit? `&limit=${limit}`:``}`,
        })
        .then ((res) => {
            dispatch (GetMoviesSucces(res.data.data))
        })
        .catch((err)=> {
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
            url: "http://localhost:3000/api/v1/movie/",
        }) 
        .then ((res) => {
            dispatch (GetMoviesSucces(res.data.data))
        })
        .catch((err)=> {
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
            url: "http://localhost:3000/api/v1/movie/",
        })
        .then ((res) => {
            dispatch (GetMoviesSucces(res.data.data))
        })
        .catch((err)=> {
            dispatch(GetMoviesError(err.response))
        })
    }
}