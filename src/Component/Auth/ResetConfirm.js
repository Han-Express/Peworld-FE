import React from 'react'
import Link from 'next/link'

const ResetConfirmComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-screen h-screen flex flex-col items-center justify-center'>
      <div className='w-2/5 bg-white rounded-t-lg'>
        <div className='flex items-center mb-5 justify-center rounded bg-white pt-10'>
          <img src='/img/logoPurple.png'></img>
        </div>
        <h2 className='text-center font-semibold pt-3 pb-3'>Request to Reset Your Account <br /> Password</h2>
        <div className='flex items-center mb-5 justify-center rounded bg-white'>
          <img src='/img/lock.png'></img>
        </div>
        <h2 className='text-center text-sm'>The following is the button for you to reset <br /> the password.</h2>
        <div className='flex justify-center'>
        <Link href={'/auth/reset-pass'}><button className='w-1/3 text-sm py-2 mt-5 mb-8 bg-[#FBB017] text-white rounded-[3px]  hover:bg-amber-400'>Change Password</button></Link>
        </div>
        <div className='bg-[#5E50A1] w-full h-4 rounded-b'></div>
        
      </div>
    </div>
  )
}

export default ResetConfirmComp