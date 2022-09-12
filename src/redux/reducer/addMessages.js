const initialstate = {
    loading: false,
    data: null
  };
  
  export const addMessagesReducer = (state = initialstate, action) => {
    switch (action.type) {
      case "ADD_MESSAGES_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_MESSAGES_SUCCESS":
        return {
          ...state,
          data: action.payload,
        };
      case "ADD_MESSAGES_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      case "RESET": 
        return {
          ...state,
          loading: false,
          data: null
        };
      default:
        return state;
    }
  };
  