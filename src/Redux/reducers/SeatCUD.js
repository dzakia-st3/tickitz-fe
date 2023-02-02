const initialState = {
    loading: false,
    data: [],
}

const Fetch = (state = initialState, action = {}) => {
    switch (action.type) {
        case "ADD_SEAT_REQUEST":
            return { ...state, loading: true }
        case "ADD_SEAT_ERROR":
            return { ...state, loading: false, data: state.data, error: action.payload }
        case "ADD_SEAT_SUCCESS":
            return { ...state, loading: false, data: action.payload, error: null }
        default:
            return state
    }
}

export default Fetch