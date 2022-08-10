import axios from "axios";

export const UpdateEmployeeRequest = (payload) => {
  return {
    type: "Request_Update_Employee",
    payload: payload,
  };
};

export const UpdateEmployeeSuccess = (payload) => {
  return {
    type: "Update_Employee_Success",
    payload: payload,
  };
};

export const UpdateEmployeeFailed = (payload) => {
  return {
    type: "Update_Employee_Failed",
    payload: payload,
  };
};

export const UpdateEmployee = (formData) => {
  return (dispatch) => {
    dispatch(UpdateEmployeeSuccess());
    axios({
      method: "PATCH",
      url: "http://localhost:5000/api/v1/employees/12",
      headers: { 
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NjAwNDk5NDEsImV4cCI6MTY2MDEzNjM0MX0.YZK-d24kLvhsbi6DKVcDCOvlcfgudd6UJgBAPuJKT8w"
       },
      data: {
        ...formData, 
        
        // job: formData.job,
        // job_status: formData.job_status,
        // domicile: formData.domicile,
        // instagram: formData.instagram,
        // github: formData.github,
        // gitlab: formData.gitlab,
        // name: formData.name,
        // description: formData.description,
      }
      
    })
      .then((res) => {
        dispatch(UpdateEmployeeSuccess(res.data));
      })
      .catch((err) => {
        dispatch(UpdateEmployeeFailed(err.response));
      });
  };
};

// export const UpdateEmployee = (id,body)=>{
//           return (dispatch)=>{
//           dispatch(UpdateEmployeeRequest)
//           axios.patch(`${URL_BE}/api/v1/employees/${id}`,{
//                     data: body,
//                     headers : {
//                               authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NTk5NDcyNjgsImV4cCI6MTY2MDAzMzY2OH0.AU-VsL8HtfGxX1H0LArdXZmfK1sAp4tl5ZgHVjrWSq8"
//                     }
//           })

//           }

// }
