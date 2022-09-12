const initialState = {
    loading: false,
    data: null,
    
}

const Fetch = (state=initialState, action) => {
    switch (action.type) {
        case "GET_USER_REQUEST":
            return {...state, loading: true}
        case "GET_USER_FAILURE":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "GET_USER_SUCCESS":
            return {...state, loading: false, data:action.payload, error:null}                 
        default:
            return state
    }
}

export default Fetch