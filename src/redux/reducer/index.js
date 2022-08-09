import { combineReducers } from "redux"
import Auth from "./auth"
import RegisterTalent from './authRegisterTalent'
import RegisterCompany from './authRegisterCompany'


const rootReducer = combineReducers ({
  auth: Auth,
  registerTalent: RegisterTalent,
  registerCompany: RegisterCompany,
})

export default rootReducer