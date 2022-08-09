import { combineReducers } from "redux";
import { employeeReducer } from "./UpdateEmployee.js";

const rootReducer = combineReducers({
          employee: employeeReducer
})

export default rootReducer