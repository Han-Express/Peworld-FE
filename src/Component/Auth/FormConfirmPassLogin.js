import React from 'react'

const ConfirmPassComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-full h-screen md:w-1/2 py-24 px-5'>
      <div className='text-3xl font-semibold'>Please login with your account</div>
      <div className='py-5'>We have an an email containing a password reset instruction toyour email. please check your email.</div>
      <form>
        <div className='flex flex-col mb-6'>
          <span className='mb-2'>Email</span>
          <input text="input" name="search" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" />
        </div>
        <div className='flex flex-col mb-8'>
          <span className='mb-2'>Kata Sandi</span>
          <input type="password" text="password" name="search" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <button className='w-full py-2 bg-[#FBB017] hover:bg-amber-400  text-white rounded-[3px]'>Reset Password</button>
      </form>
    </div>
  )
}

export default ConfirmPassComp