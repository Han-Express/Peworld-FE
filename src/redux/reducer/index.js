import { combineReducers } from "redux";
import { employeeReducer } from "./UpdateEmployee.js";
import Auth from "./auth"
import RegisterTalent from './authRegisterTalent'
import RegisterCompany from './authRegisterCompany'


const rootReducer = combineReducers({
 employee: employeeReducer,
 auth: Auth,
 registerTalent: RegisterTalent,
 registerCompany: RegisterCompany,

})

export default rootReducer