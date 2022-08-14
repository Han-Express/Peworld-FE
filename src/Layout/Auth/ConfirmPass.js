import React from 'react'
import Confirmcomp from "../../Component/Auth/FormConfirmPass"
import ImageLeft from '../../Component/Auth/imageLeft'

const Confirm = () => {
  return (
    <>
      <div className='bg-[#E5E5E5] py-10'>
        <div className='flex bg-[#E5E5E5] sm:mx-16'>
          <ImageLeft />
          <Confirmcomp />
        </div>
      </div>
    </>
  )
}

export default Confirm