import React from 'react'
import RegisterCompanycomp from "../../Component/Auth/FormRegisterCompany"
import ImageLeft from '../../Component/Auth/imageLeft'

const RegisterCompany = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <RegisterCompanycomp />
        </div>
      </div>
    </>
  )
}

export default RegisterCompany