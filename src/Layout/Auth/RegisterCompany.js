import React from 'react'
import RegisterCompanycomp from "../../Component/Auth/FormRegisterCompany"
import ImageLeft from '../../Component/Auth/imageLeft'

const RegisterCompany = () => {
  return (
    <>
    <div className='flex'>
    <ImageLeft/>
    <RegisterCompanycomp/>
    </div>
    </>
  )
}

export default RegisterCompany