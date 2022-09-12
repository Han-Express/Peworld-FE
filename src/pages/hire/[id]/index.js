import React, { useEffect, useState } from 'react'
import HirePage from '../../../Layout/Hire'
import {io} from "socket.io-client"
import { useSelector } from 'react-redux'
import Layout from '../../../Component/Layout'
import axios from 'axios'



export async function getServerSideProps(context) {
  const employees = await fetch(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/employees/${context.params.id}`)
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
  const [socket, setSocket] = useState(null);
  const {data} = useSelector(state => state.auth);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
    
    setUserId(data.userId)
  },[])
  
  useEffect(() => {
    userId ?
    axios.get(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/users/${userId}`)
    .then(res => setUser(res.data.data[0].name))
    .catch((err)=> console.log(err)) : null
  }, [userId])

  useEffect(() => {
    socket?.emit("newUser", userId)
  }, [socket, user])

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