import axios from "axios";

export const getConversationRequest = (payload) => {
  return {
    type: "GET_CONVERSATION_REQUEST",
    payload: payload,
  };
};

export const getConversationSuccess = (payload) => {
  return {
    type: "GET_CONVERSATION_SUCCESS",
    payload: payload,
  };
};

export const getConversationFailure = (payload) => {
  return {
    type: "GET_CONVERSATION_FAILURE",
    payload: payload,
  };
};

export const getConversation = (userId) => {
  return (dispatch) => {
    dispatch(getConversationRequest());
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BE}api/v1/chat/conversations/${userId}`,
    })
      .then((res) => {
        dispatch(getConversationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getConversationFailure(err.response));
      });
  };
};

