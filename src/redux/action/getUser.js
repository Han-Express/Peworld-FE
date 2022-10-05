import axios from "axios";

export const getUserRequest = (payload) => {
  return {
    type: "GET_USER_REQUEST",
    payload: payload,
  };
};

export const getUserSuccess = (payload) => {
  return {
    type: "GET_USER_SUCCESS",
    payload: payload,
  };
};

export const getUserFailure = (payload) => {
  return {
    type: "GET_USER_FAILURE",
    payload: payload,
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    dispatch(getUserRequest());
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BE}api/v1/users/${userId}`,
    })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailure(err.response));
      });
  };
};

