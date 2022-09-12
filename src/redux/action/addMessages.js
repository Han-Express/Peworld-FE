import axios from "axios";

export const addMessagesRequest = (payload) => {
  return {
    type: "ADD_MESSAGES_REQUEST",
    payload: payload,
  };
};

export const addMessagesSuccess = (payload) => {
  return {
    type: "ADD_MESSAGES_SUCCESS",
    payload: payload,
  };
};

export const addMessagesFailure = (payload) => {
  return {
    type: "ADD_MESSAGES_FAILURE",
    payload: payload,
  };
};

export const addMessages = (data) => {
  return (dispatch) => {
    dispatch(addMessagesRequest());
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BE}api/v1/chat/messages`,
      data
    })
      .then((res) => {
        dispatch(addMessagesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addMessagesFailure(err.response));
      });
  };
};

