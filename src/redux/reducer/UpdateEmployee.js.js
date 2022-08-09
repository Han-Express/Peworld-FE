

const initialstate = {
          loading: false,
          employee: {}
}

export const employeeReducer = (state = initialstate, action) => {
          switch (action.type) {
                    case "Request_Update_Employee":
                              return {
                                        ...state,
                                        loading: true
                              }
                    case "Update_Employee_Success":
                              return {
                                        ...state,
                                        employee: action.payload
                              }
                    case "Update_Employee_Failed":
                              return {
                                        ...state,
                                        error: action.payload
                              }
                    default:
                              return state
          }
}