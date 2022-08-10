import React from 'react'
import HirePage from '../../Layout/Hire'


export async function getServerSideProps() {
  const employees = await fetch('http://localhost:5000/api/v1/employees/12')
  const skill = await fetch('http://localhost:5000/api/v1/skill/12')
  const dataEmployees = await employees.json()
  const dataSkill = await skill.json()
  
  
  return {
    props: {
      employees: dataEmployees.data,
      skill: dataSkill.data
    }
  }
}


const Hire = ({employees, skill}) => {
  return (
    <>
    <HirePage 
      employees={employees} 
      skill={skill}
    />
    </>
  )
}

export default Hire