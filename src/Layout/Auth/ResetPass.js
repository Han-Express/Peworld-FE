import React from 'react'
import Resetcomp from "../../Component/Auth/FormResetPass"
import ImageLeft from '../../Component/Auth/imageLeft'

const Reset = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <Resetcomp />
        </div>
      </div>
    </>
  )
}

export default Reset