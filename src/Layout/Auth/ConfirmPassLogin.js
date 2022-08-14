import React from 'react'
import ConfirmPassLogincomp from "../../Component/Auth/FormConfirmPassLogin"
import ImageLeft from '../../Component/Auth/imageLeft'

const ConfirmPassLogin = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <ConfirmPassLogincomp />
        </div>
      </div>
    </>
  )
}

export default ConfirmPassLogin