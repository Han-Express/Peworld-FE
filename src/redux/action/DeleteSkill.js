import axios from "axios";

export const DeleteSkillRequest = (payload) => {
  return {
    type: "Request_Delete_Skill",
    payload: payload,
  };
};

export const DeleteSkillSuccess = (payload) => {
  return {
    type: "Delete_Skill_Success",
    payload: payload,
  };
};

export const DeleteSkillFailed = (payload) => {
  return {
    type: "Delete_Skill_Failed",
    payload: payload,
  };
};

export const DeleteSkill = (formData) => {
  console.log(formData.skill, "testes")
  return (dispatch) => {
    dispatch(DeleteSkillSuccess());
    axios({
      method: "DELETE",
      url: `http://localhost:5000/api/v1/skill/12?skill=${formData.skill}`,
      data: {},
      headers: { 
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NjAxMzEzMzAsImV4cCI6MTY2MDIxNzczMH0.MSu-8tIJnGJWlFkkCEap35yP9Yth5BnTuK5sgY4-AWU"
       }
    })
      .then((res) => {
        dispatch(DeleteSkillSuccess(res.data));
      })
      .catch((err) => {
        dispatch(DeleteSkillFailed(err.response));
      });
  };
};

