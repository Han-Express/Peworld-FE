import React from "react";
import Profile from "../../../Layout/Profile";



export async function getServerSideProps(context) {
  const employees = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/employees/${context.params.id}`)
  const portfolio = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/portfolio/${context.params.id}`)
  const skill = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/skill/${context.params.id}`)
  const experience = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/experience/${context.params.id}`)
  const dataEmployees = await employees.json()
  const dataPortfolio = await portfolio.json()
  const dataSkill = await skill.json()
  const dataExperience = await experience.json()
  
  return {
    props: {
      employees: dataEmployees.data,
      portfolio: dataPortfolio.data,
      skill: dataSkill.data,
      experience: dataExperience.data
    }
  }
}

const showProfile = ({employees, portfolio, skill, experience}) => {
  return (
    <>
    <Profile 
      employees={employees} 
      portfolio={portfolio}
      skill = {skill}
      experience = {experience}
    />
    </>
  )
}

export default showProfile