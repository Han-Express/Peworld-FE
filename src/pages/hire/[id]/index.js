import React, { useEffect, useState } from 'react'
import HirePage from '../../../Layout/Hire'
import { useSelector } from 'react-redux'
import Layout from '../../../Component/Layout'
import axios from 'axios'



export async function getServerSideProps(context) {
  const employees = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/employees/${context.params.id}`)
  const skill = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/skill/${context.params.id}`)
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
  const {socket} = useSelector(state => state.socket) 
  const {data} = useSelector(state => state.auth);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    setUserId(data.userId)
  },[])
  
  useEffect(() => {
    userId ?
    axios.get(`${process.env.REACT_APP_URL_BE}api/v1/users/${userId}`)
    .then(res => setUser(res.data.data[0].name))
    .catch((err)=> console.log(err)) : null
  }, [userId])


  return (
    <Layout socket={socket} user={user}>
    <HirePage 
      employees={employees} 
      skill={skill}
      socket={socket}
      user={user}
    />
    </Layout>
  )
}

export default Hire