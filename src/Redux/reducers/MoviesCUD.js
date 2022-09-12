const initialState = {
    loading: false,
    data: {},
    error: null,
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "ADD_MOVIES_REQUEST":
            return {...state, loading: true}
        case "ADD_MOVIES_ERROR":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "ADD_MOVIES_SUCCESS":
            return {...state, loading: false, data:action.payload, error:null}
        case "UPDATE_MOVIES_REQUEST":
            return {...state, loading: true}
        case "UPDATE_MOVIES_ERROR":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "UPDATE_MOVIES_SUCCESS":
            return {...state, loading: false, data:action.payload, error:null}
        case "DELETE_MOVIES_REQUEST":
            return {...state, loading: true}
        case "DELETE_MOVIES_ERROR":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "DELETE_MOVIES_SUCCESS":
            return {...state, loading: false, data:action.payload, error:null}          
        default:
            return state
    }
}

export default Fetch