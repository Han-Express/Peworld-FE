import React from 'react'
import RegisterTalentcomp from "../../Component/Auth/FormRegisterTalent"
import ImageLeft from '../../Component/Auth/imageLeft'

const RegisterTalent = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <RegisterTalentcomp />
        </div>
      </div>
    </>
  )
}

export default RegisterTalent