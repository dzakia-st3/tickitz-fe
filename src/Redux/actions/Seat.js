import axios from "axios"

const GetSeatRequest = () => {
    return {
        type: "GET_SEAT_REQUEST"
    }
}

const GetSeatSucces = (data) => {
    return {
        type: "GET_SEAT_SUCCESS",
        payload: data
    }
}

const GetSeatError = (error) => {
    return {
        type: "GET_SEAT_ERROR",
        payload: error
    }
}

export const GetSeat = (id) => {
    return (dispatch) => {
        dispatch(GetSeatRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/seat/7`,
        })
            .then((res) => {
                dispatch(GetSeatSucces(res.data))
            })
            .catch((err) => {
                dispatch(GetSeatError(err.response))
            })
    }
}


const AddSeatRequest = () => {
    return {
        type: "ADD_SEAT_REQUEST"
    }
}

const AddSeatSucces = (data) => {
    return {
        type: "ADD_SEAT_SUCCESS",
        payload: data
    }
}

const AddSeatError = (error) => {
    return {
        type: "ADD_SEAT_ERROR",
        payload: error
    }
}

export const AddSeat = (formData) => {
    return (dispatch) => {
        dispatch(AddSeatRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/seat/`,
            data: {
                id_booking : 6,
                seat_choosed : formData
            },
        })
            .then((res) => {
                dispatch(AddSeatSucces(res.data.data))
            })
            .catch((err) => {
                dispatch(AddSeatError(err.response))
            })
    }
}