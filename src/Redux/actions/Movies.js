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
            url: `https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/?${page ? `page=${page}` : ``}${limit ? `&limit=${limit}` : ``}`,
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
            url: "https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/",
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
            url: "https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/",
        })
            .then((res) => {
                dispatch(GetMoviesSucces(res.data.data))
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
        console.log(formData, 'cek data di action')
        console.log(token, 'cek token di action')
        dispatch(AddMoviesRequest())
        axios({
            method: "POST",
            url: "https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/",
            data: formData,
            headers: {
                authorization: token
            }
        })
            .then((res) => {
                dispatch(AddMoviesSucces(res.data.data))
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
        console.log(formData, 'cek data update di action')
        console.log(token, 'cek token update di action')
        dispatch(UpdateMoviesRequest())
        axios({
            method: "PATCH",
            url: `https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/${id}`,
            data: formData,
            headers: {
                authorization: token
            }
        })
            .then((res) => {
                dispatch(UpdateMoviesSucces(res.data.data))
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

export const DeleteMovies = (id) => {
    return (dispatch) => {
        dispatch(DeleteMoviesRequest(id))
        axios({
            method: "DELETE",
            url: 'https://starfish-app-2mjf6.ondigitalocean.app/api/v1/movie/:id',
            data: id,
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU3NDM5MDM2fQ.Qm-OEiGg1Lsm9RZ1_EtB0UXly52PbuaB_jK1b_gDa1w'
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

