import axios from "axios";

export const AddPortfolioRequest = (payload) => {
  return {
    type: "Request_Add_Portfolio",
    payload: payload,
  };
};

export const AddPortfolioSuccess = (payload) => {
  return {
    type: "Add_Portfolio_Success",
    payload: payload,
  };
};

export const AddPortfolioFailed = (payload) => {
  return {
    type: "Add_Portfolio_Failed",
    payload: payload,
  };
};

export const AddPortfolio = (formData, userId, token) => {
  console.log(formData, "test")
  return (dispatch) => {   
    dispatch(AddPortfolioRequest());
    axios({
      method: "POST",
      url: "https://coral-app-3yjfb.ondigitalocean.app/api/v1/portfolio",
      data: {
        name: formData.name,
        link: formData.link,
        image: formData.image,
        user_id: userId,
      },
      headers: { 
        authorization: token
       }
    })
      .then((res) => {
        dispatch(AddPortfolioSuccess(res.data));
      })
      .catch((err) => {
        dispatch(AddPortfolioFailed(err.response));
      });
  };
};

