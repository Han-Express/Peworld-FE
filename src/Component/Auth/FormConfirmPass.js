import React from 'react'
import Link from 'next/link'

const ConfirmPassComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-3/5 px-32 py-24'>
      <div className='text-3xl font-semibold'>Reset password</div>
      <div className='py-5'>You need to change your password to activate your account</div>
      <form>
        <div className='flex flex-col mt-5 mb-6'>
          <span>Kata Sandi</span>
          <input type="password" text="password" name="search" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <div className='flex flex-col mb-8'>
          <span>Konfirmasi Sandi Baru</span>
          <input type="password" text="password" name="search" placeholder="Masukkan kata sandi baru" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <Link href={'/auth/confirm-pass-login'}><button className='w-full py-2 bg-[#FBB017] text-white rounded-[3px] hover:bg-amber-400 '>Reset Password</button></Link>
      </form>
    </div>
  )
}

export default ConfirmPassComp