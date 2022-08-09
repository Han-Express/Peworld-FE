import React from 'react'
import Link from 'next/link'

const OptionComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-screen h-screen flex flex-col items-center justify-center'>
      <div className='w-2/5 md:w-1/5'>
        <div className='flex items-center mb-5 justify-center rounded bg-[#5E50A1]'>
          <img src='/img/logo.png'></img>
          <h2 className='text-white ml-4 py-3'>Peworld</h2>
        </div>
        <Link href={'/auth/register-talent'}><button className='bg-white w-full py-3 mb-5 rounded hover:bg-gray-100'>Daftar Pekerja</button></Link>
        <hr />
        <Link href={'/auth/register-company'}><button className='bg-white w-full py-3 rounded hover:bg-gray-100'>Daftar Perekrut</button></Link>
      </div>
      <div className='flex justify-center'>
        <h2 className='flex py-7'>Sudah punya akun?<Link href='/auth/login'><span className='cursor-pointer text-[#5E50A1] font-semibold'>Masuk disini</span></Link></h2>
      </div>
    </div>
  )
}

export default OptionComp