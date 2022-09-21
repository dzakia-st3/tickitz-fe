const initialState = {
    loading: false,
    data: {},
    result: []
}

const Fetch = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GET_SCHEDULE_REQUEST":
            return { ...state, loading: true }
        case "GET_SCHEDULE_ERROR":
            return { ...state, loading: false, data: state.data, error: action.payload }
        case "GET_SCHEDULE_SUCCESS":
            return { ...state, loading: false, data: action.payload, error: null }
        case "GET_SCHEDULE_BY_ID":
            return { loading: false, data: action.payload, error: null }
        default:
            return state
    }
}

export default Fetch