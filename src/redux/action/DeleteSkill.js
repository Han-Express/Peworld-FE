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

export const DeleteSkill = (formData, userId, token) => {
  console.log(formData.skill, "testes")
  return (dispatch) => {
    dispatch(DeleteSkillRequest());
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL_BE}api/v1/skill/${userId}?skillId=${formData.skill}`,
      data: {},
      headers: { 
        authorization: token
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

