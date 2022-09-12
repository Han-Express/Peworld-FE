const initialstate = {
  loading: false,
  data: null
};

export const experienceReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Request_Add_Experience":
      return {
        ...state,
        loading: true,
      };
    case "Add_Experience_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Add_Experience_Failed":
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
