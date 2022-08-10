const initialState = {
    loading: false,
    data: {},
    
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "GET_TALENT_REQUEST":
            return {...state, loading: true}
        case "GET_TALENT_ERROR":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "GET_TALENT_SUCCESS":
            console.log(action.payload , 'cek isi talent reducer')
            return {...state, loading: false, data:action.payload, error:null}                 
        default:
            return state
    }
}

export default Fetch