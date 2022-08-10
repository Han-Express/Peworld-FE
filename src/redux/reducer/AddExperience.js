const initialstate = {
  loading: false,
  data: null
};

export const experienceReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Request_Update_Experience":
      return {
        ...state,
        loading: true,
      };
    case "Update_Experience_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Update_Experience_Failed":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
