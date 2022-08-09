import React from 'react'
import RegisterTalentcomp from "../../Component/Auth/FormRegisterTalent"
import ImageLeft from '../../Component/Auth/imageLeft'

const RegisterTalent = () => {
  return (
    <>
    <div className='flex'>
    <ImageLeft/>
    <RegisterTalentcomp/>
    </div>
    </>
  )
}

export default RegisterTalent