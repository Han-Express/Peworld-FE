const initialstate = {
  loading: false,
  data: null,
};

export const skillReducer = (state = initialstate, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "Request_Add_Skill":
      return {
        ...state,
        loading: true,
      };
    case "Add_Skill_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Add_Skill_Failed":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
