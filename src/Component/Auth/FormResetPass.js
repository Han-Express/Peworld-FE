import React from 'react'

const ResetPassComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-full h-screen md:w-3/5 px-32 py-24'>
      <div className='text-3xl font-semibold'>Reset password</div>
      <div className='py-5'>Enter your user account's verified email address and we will send <br /> you a password reset link.
      </div>
      <form>
        <div className='flex flex-col mb-10 mt-5'>
          <span>Email</span>
          <input text="input" name="search" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" />
        </div>
        <button className='w-full py-2 bg-[#FBB017] text-white rounded-[3px] hover:bg-amber-400 '>Send password reset email</button>
      </form>
    </div>
  )
}

export default ResetPassComp