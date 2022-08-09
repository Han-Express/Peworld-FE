import axios from "axios"

export const UpdateEmployeeRequest = (payload) => {
          return {
                    type: "Request_Update_Employee",
                    payload: payload
          }

}

export const UpdateEmployeeSuccess = (payload) => {
          return {
                    type: "Update_Employee_Success",
                    payload: payload
          }

}

export const UpdateEmployeeFailed = (payload) => {
          return {
                    type: "Update_Employee_Failed",
                    payload: payload
          }

}

export const UpdateEmployee = (id,body)=>{
          return (dispatch)=>{
          dispatch(UpdateEmployeeRequest)
          axios.patch(`${URL_BE}/api/v1/employees/${id}`,{
                    data: body,
                    headers : {
                              authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJyb2xlIjoiZW1wbG95ZWUiLCJpYXQiOjE2NTk5NDcyNjgsImV4cCI6MTY2MDAzMzY2OH0.AU-VsL8HtfGxX1H0LArdXZmfK1sAp4tl5ZgHVjrWSq8"
                    }
          })

          }

}