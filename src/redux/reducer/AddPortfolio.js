const initialstate = {
  loading: false,
  data: null
};

export const portfolioReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Request_Add_Portfolio":
      return {
        ...state,
        loading: true,
      };
    case "Add_Portfolio_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Add_Portfolio_Failed":
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
