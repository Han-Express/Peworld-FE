const initialstate = {
  loading: false,
  data: null,
};

export const deleteSkillReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Request_Delete_Skill":
      return {
        ...state,
        loading: true,
      };
    case "Delete_Skill_Success":
      return {
        ...state,
        data: action.payload,
      };
    case "Delete_Skill_Failed":
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
