import React from 'react'
import Link from 'next/link'

const TalentComp = () => {
  return (
    <div className='bg-[#E5E5E5] w-3/5 px-32 py-5'>
      <div className='text-3xl font-semibold'>Halo, Pewpeople</div>
      <div className='pt-2 pb-3 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod <br /> ipsum et dui rhoncus auctor.
      </div>
      <form>
        <div className='flex flex-col mb-5'>
          <span>Nama</span>
          <input text="input" placeholder="Masukkan nama panjang" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" />
        </div>
        <div className='flex flex-col mb-5'>
          <span>Email</span>
          <input text="input" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" />
        </div>
        <div className='flex flex-col mb-5'>
          <span>No Handphone</span>
          <input text="input" placeholder="no handphone" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <div className='flex flex-col mb-5'>
          <span>Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <div className='flex flex-col mb-8'>
          <span>Konfirmasi Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan konfirmasi kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " />
        </div>
        <button className='py-2 bg-[#FBB017] text-white w-full rounded-[3px] hover:bg-amber-400 '>Daftar</button>
      </form>
      <div className='flex justify-center'>
        <h2 className='flex pt-5'>Anda sudah punya akun?<Link href='/auth/login'><span className='cursor-pointer text-[#FBB017] font-semibold'>Masuk disini</span></Link></h2>
      </div>
    </div>
  )
}

export default TalentComp