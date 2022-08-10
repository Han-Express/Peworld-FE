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

export const AddPortfolio = (formData) => {
  console.log(formData, "test")
  return (dispatch) => {   
    dispatch(AddPortfolioRequest());
    axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/portfolio",
      data: {
        name: formData.name,
        link: formData.link,
        image: formData.image,
        user_id: 12,
      },
      headers: { 
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NjAxMzEzMzAsImV4cCI6MTY2MDIxNzczMH0.MSu-8tIJnGJWlFkkCEap35yP9Yth5BnTuK5sgY4-AWU"
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

