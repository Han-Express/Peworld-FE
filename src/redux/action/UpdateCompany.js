import axios from "axios";

export const UpdateCompanyRequest = (payload) => {
  return {
    type: "Request_Update_Company",
    payload: payload,
  };
};

export const UpdateCompanySuccess = (payload) => {
  return {
    type: "Update_Company_Success",
    payload: payload,
  };
};

export const UpdateCompanyFailed = (payload) => {
  return {
    type: "Update_Company_Failed",
    payload: payload,
  };
};

export const UpdateCompany = (formData, userId, token) => {
  return (dispatch) => {
    dispatch(UpdateCompanyRequest());
    axios({
      method: "PATCH",
      url: `https://coral-app-3yjfb.ondigitalocean.app/api/v1/companies/${userId}`,
      headers: { 
        authorization: token
       },
      data: {
        ...formData, 
       
      }
      
    })
      .then((res) => {
        dispatch(UpdateCompanySuccess(res.data));
      })
      .catch((err) => {
        dispatch(UpdateCompanyFailed(err.response));
      });
  };
};

