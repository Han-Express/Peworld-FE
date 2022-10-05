import axios from "axios";

export const getMessagesRequest = (payload) => {
  return {
    type: "GET_MESSAGES_REQUEST",
    payload: payload,
  };
};

export const getMessagesSuccess = (payload) => {
  return {
    type: "GET_MESSAGES_SUCCESS",
    payload: payload,
  };
};

export const getMessagesFailure = (payload) => {
  return {
    type: "GET_MESSAGES_FAILURE",
    payload: payload,
  };
};

export const getMessages = (id) => {
  return (dispatch) => {
    dispatch(getMessagesRequest());
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BE}api/v1/chat/messages/${id}`,
    })
      .then((res) => {
        dispatch(getMessagesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getMessagesFailure(err.response));
      });
  };
};

