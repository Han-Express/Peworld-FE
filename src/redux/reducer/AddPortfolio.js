const initialstate = {
  loading: false,
  data: null
};

export const portfolioReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Request_Update_Portfolio":
      return {
        ...state,
        loading: true,
      };
    case "Update_Portfolio_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Update_Portfolio_Failed":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
