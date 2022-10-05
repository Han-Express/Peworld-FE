import axios from "axios";

export const AddExperienceRequest = (payload) => {
  return {
    type: "Request_Add_Experience",
    payload: payload,
  };
};

export const AddExperienceSuccess = (payload) => {
  return {
    type: "Add_Experience_Success",
    payload: payload,
  };
};

export const AddExperienceFailed = (payload) => {
  return {
    type: "Add_Experience_Failed",
    payload: payload,
  };
};

export const AddExperience = (formData, userId, token) => {
  return (dispatch) => {
    dispatch(AddExperienceRequest());
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BE}api/v1/experience`,
      data: {
        user_id: userId,
        company_name: formData.company_name,
        position: formData.position,
        entry_date: formData.entry_date,
        date_out: formData.date_out,
        description: formData.description
      },
      headers: { 
        authorization: token
       }
    })
      .then((res) => {
        dispatch(AddExperienceSuccess(res.data));
      })
      .catch((err) => {
        dispatch(AddExperienceFailed(err.response));
      });
  };
};

