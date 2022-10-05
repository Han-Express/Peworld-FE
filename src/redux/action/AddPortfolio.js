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

export const AddPortfolio = (formData, token) => {
  console.log(formData, "test")
  return (dispatch) => {   
    dispatch(AddPortfolioRequest());
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BE}api/v1/portfolio`,
      data: formData,
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

