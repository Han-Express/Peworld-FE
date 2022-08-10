import { combineReducers } from "redux"
import Auth from "./auth"
import RegisterTalent from './authRegisterTalent'
import RegisterCompany from './authRegisterCompany'
import Talent from './talent'
import Skill from './skill'


const rootReducer = combineReducers ({
  auth: Auth,
  registerTalent: RegisterTalent,
  registerCompany: RegisterCompany,
  talent: Talent,
  skill: Skill,
})

export default rootReducer