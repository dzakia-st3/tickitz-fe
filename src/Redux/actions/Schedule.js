import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"

const GetScheduleRequest = () => {
    return {
        type: "GET_SCHEDULE_REQUEST"
    }
}

const GetScheduleSucces = (data) => {
    return {
        type: "GET_SCHEDULE_SUCCESS",
        payload: data
    }
}

const GetScheduleError = (error) => {
    return {
        type: "GET_SCHEDULE_ERROR",
        payload: error
    }
}

export const GetSchedule = () => {
    return (dispatch) => {
        dispatch(GetScheduleRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/schedule/`,
        })
            .then((res) => {
                dispatch(GetScheduleSucces(res.data.data))
            })
            .catch((err) => {
                dispatch(GetScheduleError(err.response))
            })
    }
}


const GetScheduleRequestbyId = () => {
    return {
        type: "GET_SCHEDULE_BY_ID"
    }
}


export const GetSchedulebyId = (id) => {
    return (dispatch) => {
        dispatch(GetScheduleRequestbyId())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/schedule/${id}`,
        })
            .then((res) => {
                dispatch(GetScheduleSucces(res))
            })
            .catch((err) => {
                dispatch(GetScheduleError(err.response))
            })
    }
}
