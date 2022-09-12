const initialState = {
    socket: null
}

export const socketReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_SOCKET":
            return {...state, socket: action.payload}                 
        default:
            return state
    }
}