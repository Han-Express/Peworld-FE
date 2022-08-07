import React from 'react'
import Logincomp from "../../Component/Auth/FormLogin"
import ImageLeft from '../../Component/Auth/imageLeft'

const Login = () => {
  return (
    <>
    <div className='flex'>
    <ImageLeft/>
    <Logincomp/>
    </div>
    </>
  )
}

export default Login