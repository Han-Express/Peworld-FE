import { combineReducers } from "redux";
import { employeeReducer } from "./UpdateEmployee.js"
import { portfolioReducer } from "./AddPortfolio.js";
import { experienceReducer } from './AddExperience'
import { skillReducer } from "./AddSkill"
import { deleteSkillReducer } from "./DeleteSkill";
import Auth from "./auth"
import RegisterTalent from './authRegisterTalent'
import RegisterCompany from './authRegisterCompany'
import { companyReducer } from "./UpdateCompany";
import Talent from './talent'
import Skill from './skill'
import conversationReducer from './getConversation'
import userReducer from './getUser'
import messagesReducer from './getMessages'
import {addMessagesReducer} from './addMessages'
import { socketReducer } from "./socket.js";

const rootReducer = combineReducers({
 employee: employeeReducer,
 experience: experienceReducer,
 skill: skillReducer,
 deleteSkill: deleteSkillReducer,
 portfolio: portfolioReducer,
 auth: Auth,
 registerTalent: RegisterTalent,
 registerCompany: RegisterCompany,
 company: companyReducer,
 talent: Talent,
 getSkill: Skill,
 conversation: conversationReducer,
 user: userReducer,
 messages: messagesReducer,
 addMessages: addMessagesReducer,
 socket: socketReducer
})

export default rootReducer