import axios from "axios";

export const AddSkillRequest = (payload) => {
  return {
    type: "Request_Add_Skill",
    payload: payload,
  };
};

export const AddSkillSuccess = (payload) => {
  return {
    type: "Add_Skill_Success",
    payload: payload,
  };
};

export const AddSkillFailed = (payload) => {
  return {
    type: "Add_Skill_Failed",
    payload: payload,
  };
};

export const AddSkill = (formData) => {
  return (dispatch) => {
    dispatch(AddSkillSuccess());
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/skill",
      data: {
        user_id: formData.user_id,
        skill: formData.skill,
      },
      headers: { 
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NjAxMzEzMzAsImV4cCI6MTY2MDIxNzczMH0.MSu-8tIJnGJWlFkkCEap35yP9Yth5BnTuK5sgY4-AWU"
       }
    })
      .then((res) => {
        dispatch(AddSkillSuccess(res.data));
      })
      .catch((err) => {
        dispatch(AddSkillFailed(err.response));
      });
  };
};

