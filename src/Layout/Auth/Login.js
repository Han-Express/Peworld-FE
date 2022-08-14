import React from 'react'
import Logincomp from "../../Component/Auth/FormLogin"
import ImageLeft from '../../Component/Auth/imageLeft'

const Login = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <Logincomp />
        </div>
      </div>
    </>
  )
}

export default Login