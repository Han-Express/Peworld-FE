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

export const AddExperience = (formData) => {
  return (dispatch) => {
    dispatch(AddExperienceSuccess());
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/experience",
      data: {
        user_id: formData.user_id,
        company_name: formData.company_name,
        position: formData.position,
        entry_date: formData.entry_date,
        date_out: formData.date_out,
        description: formData.description
      },
      headers: { 
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NjAwNDI4MTksImV4cCI6MTY2MDEyOTIxOX0._gf6JBGl9LlaR8Vcg2S3hCBM9QwmDxa_8ZBNk24RFDI"
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

