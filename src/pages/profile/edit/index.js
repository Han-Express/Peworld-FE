import React from 'react'
import Layout from '../../../Component/Layout'
import ProfilePekerjaLayout from '../../../Layout/profile-pekerja-edit'

export async function getServerSideProps() {
  const employees = await fetch('http://localhost:5000/api/v1/employees/12')
  const dataEmployees = await employees.json()
  const skill = await fetch('http://localhost:5000/api/v1/skill/12')
  const dataSkill = await skill.json()
  return {
    props: {
      employees: dataEmployees.data,
      skill: dataSkill.data
    }
  }
}

const edit = ({employees, skill}) => {
  return (
    <Layout>
         <ProfilePekerjaLayout employees={employees} skill={skill}/>
    </Layout>
  )
}

export default edit