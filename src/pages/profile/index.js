import React from "react";
import Profile from "../../Layout/Profile";



export async function getServerSideProps() {
  const employees = await fetch('http://localhost:5000/api/v1/employees/12')
  const portfolio = await fetch('http://localhost:5000/api/v1/portfolio/12')
  const skill = await fetch('http://localhost:5000/api/v1/skill/12')
  const experience = await fetch('http://localhost:5000/api/v1/experience/12')
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