import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterTalent } from "../../redux/action/auth"
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const TalentComp = () => {
  const {data, error, loading, isRegister} = useSelector((state) => state.registerTalent)
  
  const dispatch = useDispatch()
  const router = useRouter()

  const [formRegisterTalent, setFormRegisterTalent] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_pass: "",
  })

  const handleRegister = (e) => {
    e.preventDefault()
    if (formRegisterTalent.password !== formRegisterTalent.confirm_pass) {
      alert('character input must be same!')
    }
    dispatch(RegisterTalent(formRegisterTalent))
  }

  useEffect(() => {
    console.log(isRegister, 'lihat nilai register')
    if (isRegister === true) {
      console.log(data, 'cek isi data')
      Swal.fire({
        icon: 'success',
        title: '',
        text: data.message,
      })
      router.push('/auth/login')
    } else {
      router.push('/auth/register-talent')
    }
  }, [isRegister])

  useEffect (() => {
    if (error) {
      console.log(error, 'cek error form register')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }
  }, [error])

  return (
    <div className='bg-[#E5E5E5] w-full h-screen md:w-3/5 px-32 pt-14'>
      <div className='text-3xl font-semibold'>Halo, Pewpeople</div>
      <div className='pt-2 pb-3 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod <br /> ipsum et dui rhoncus auctor.
      </div>
      <form onSubmit={handleRegister} className='no-scrollbar overflow-y-scroll h-4/6'>
        <div className='flex flex-col mb-5'>
          <span>Nama</span>
          <input text="input" placeholder="Masukkan nama panjang" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterTalent ((prevData) => ({
             ...prevData,
             name: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span>Email</span>
          <input text="input" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterTalent ((prevData) => ({
            ...prevData,
            email: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span>No Handphone</span>
          <input text="input" placeholder="no handphone" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterTalent((prevData) => ({
            ...prevData,
            phone_number: e.target.value
          }))} />
        </div>
        <div className='flex flex-col mb-5'>
          <span>Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterTalent((prevData) => ({
            ...prevData,
            password: e.target.value
          }))} />
        </div>
        <div className='flex flex-col mb-8'>
          <span>Konfirmasi Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan konfirmasi kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterTalent((prevData) => ({
            ...prevData,
            confirm_pass: e.target.value
          }))}/>
        </div>
        <button className='py-2 bg-[#FBB017] text-white w-full rounded-[3px] hover:bg-amber-400 ' onClick={handleRegister}>Daftar</button>
      </form>
      <div className='flex justify-center'>
        <h2 className='flex pt-5'>Anda sudah punya akun?<Link href='/auth/login'><span className='cursor-pointer text-[#FBB017] font-semibold'>Masuk disini</span></Link></h2>
      </div>
    </div>
  )
}

export default TalentComp