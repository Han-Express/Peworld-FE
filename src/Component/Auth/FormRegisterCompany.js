import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterCompany } from "../../redux/action/auth"
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const CompanyComp = () => {
  const {data, error, loading, isRegister} = useSelector((state) => state.registerCompany)
  
  const dispatch = useDispatch()
  const router = useRouter()

  const [formRegisterCompany, setFormRegisterCompany] = useState({
    name: "",
    email: "",
    phone_number: "",
    company_name: "",
    sector: "",
    password: "",
    confirm_pass: "",
  })

  const handleRegister = (e) => {
    e.preventDefault()
    if (formRegisterCompany.password !== formRegisterCompany.confirm_pass) {
      alert('character input must be same!')
    }
    dispatch(RegisterCompany(formRegisterCompany))
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
      router.push('/auth/register-company')
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
    <div className='bg-[#E5E5E5] w-full md:h-full md:w-1/2 py-10 px-5'>
      <div className='text-3xl font-semibold'>Halo, Pewpeople</div>
      <div className='pt-2 pb-3 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod <br /> ipsum et dui rhoncus auctor.
      </div>
      <form onSubmit={handleRegister} className='no-scrollbar md:overflow-y-scroll h-full mb-10 w-full'>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>Nama</span>
          <input text="input" placeholder="Masukkan nama panjang" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterCompany((prevData) => ({
            ...prevData,
            name: e.target.value
          }))} />
        </div>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>Email</span>
          <input text="input" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterCompany ((prevData) => ({
            ...prevData,
            email: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>Perusahaan</span>
          <input text="input" placeholder="Masukkan nama perusahaan" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " onChange={(e) => setFormRegisterCompany((prevData) => ({
            ...prevData,
            company_name: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>Bidang Perusahaan</span>
          <input text="input" placeholder="Masukkan bidang perusahaan Anda" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterCompany((prevData) => ({
            ...prevData,
            sector: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>No Handphone</span>
          <input text="input" placeholder="Masukkan no handphone" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px] " onChange={(e) => setFormRegisterCompany((prevData) => ({
            ...prevData,
            phone_number: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-5'>
          <span className='mb-2'>Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterCompany((prevData) => ({
            ...prevData,
            password: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-8'>
          <span className='mb-2'>Konfirmasi Kata Sandi</span>
          <input type="password" text="input" placeholder="Masukkan konfirmasi kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormRegisterCompany ((prevData) => ({
            ...prevData,
            confirm_pass: e.target.value
          }))}/>
        </div>
        <button onClick={handleRegister} className='py-2 bg-[#FBB017] text-white w-full rounded-[3px] hover:bg-amber-400 '>Daftar</button>
      </form>
      <div className='flex justify-center mt-7'>
        <h2 className='flex pt-10'>Anda sudah punya akun?<Link href='/auth/login'><span className='cursor-pointer text-[#FBB017] font-semibold ml-1'>Masuk disini</span></Link></h2>
      </div>
    </div>
  )
}

export default CompanyComp