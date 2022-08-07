import React from 'react'
import Link from 'next/link'

const LoginComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-3/5 px-32 py-20'>
      <div className='text-3xl font-semibold'>Halo, Pewpeople</div>
      <div className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
      </div>
      <form>
        <div className='flex flex-col mb-6'>
          <span>Email</span>
          <input text="input" name="search" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" />
        </div>
        <div className='flex flex-col mb-6'>
          <span>Kata Sandi</span>
          <input type="password" text="password" name="search" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <h2 className='py-4 text-right'><Link href='/auth/reset-confirm' className=''>Lupa kata sandi?</Link></h2>
        <button className='w-full py-2 bg-[#FBB017] text-white rounded-[3px]  hover:bg-amber-400'>Masuk</button>
      </form>
      <div className='flex justify-center'>
        <h2 className='flex py-7'>Anda belum punya akun?<Link href='/auth/option'><span className='cursor-pointer text-[#FBB017] font-semibold'>Daftar disini</span></Link></h2>
      </div>
    </div>
  )
}

export default LoginComp