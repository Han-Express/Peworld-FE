import axios from "axios";

export const AddSkillRequest = () => {
  return {
    type: "Request_Add_Skill",
    // payload: payload,
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

export const AddSkill = (formData, userId, token) => {
  return (dispatch) => {
    dispatch(AddSkillRequest());
    axios({
      method: "POST",
      url: "https://coral-app-3yjfb.ondigitalocean.app/api/v1/skill",
      data: {
        user_id: userId,
        skill: formData.skill,
      },
      headers: { 
        authorization: token
       }
    })
      .then((res) => {
        dispatch(AddSkillSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(AddSkillFailed(err.response));
      });
  };
};

