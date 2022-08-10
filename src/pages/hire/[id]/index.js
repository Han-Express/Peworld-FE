import React from 'react'
import HirePage from '../../../Layout/Hire'



export async function getServerSideProps(context) {
  const employees = await fetch(`https://coral-app-3yjfb.ondigitalocean.app0/api/v1/employees/${context.params.id}`)
  const skill = await fetch(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/skill/${context.params.id}`)
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