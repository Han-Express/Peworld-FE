import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from "../../redux/action/auth"
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const LoginComp = () => {
  const { data, error, loading, isLogin} = useSelector((state) => state.auth)
  console.log(data, 'cek data di login')
  const dispatch = useDispatch()
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(Login(formLogin))
  }

  useEffect(() => {
    if (isLogin === true && data?.role === 'employee' ) {
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Login Success',
      })
      router.push(`/profile/${data.userId}`)
    } else if (isLogin === true && data?.role === 'recruiter') {
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Login Success',
      })
      router.push('/home')
    }
    else {
      router.push('/auth/login')
    }
  }, [isLogin])

  useEffect (() => {
    if (error) {
      console.log(error, 'cek error form login')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }
  }, [error])


  return (
    <div className='bg-[#E5E5E5] w-full h-screen md:w-3/5 md:px-32 py-20 px-5'>
      <div className='text-3xl font-semibold'>Halo, Pewpeople</div>
      <div className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
      </div>
      <form onSubmit={handleLogin}>
        <div className='flex flex-col mb-6'>
          <span className='py-1'>Email</span>
          <input text="input" name="search" placeholder="Masukkan alamat email" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormLogin ((prevData) => ({
            ...prevData,
            email: e.target.value
          }))}/>
        </div>
        <div className='flex flex-col mb-6'>
          <span className='py-1'>Kata Sandi</span>
          <input type="password" text="password" name="search" placeholder="Masukkan kata sandi" className="outline-none px-3 py-2 placeholder-gray-500 text-black rounded-[3px]" onChange={(e) => setFormLogin ((prevData) => ({
            ...prevData,
            password: e.target.value
          }))} />
        </div>
        <h2 className='py-4 text-right'><Link href='/auth/reset-confirm' className=''>Lupa kata sandi?</Link></h2>
        <button className='w-full py-2 bg-[#FBB017] text-white rounded-[3px] hover:bg-amber-400' onClick={handleLogin}>Masuk</button>
      </form>
      <div className='flex justify-center'>
        <h2 className='flex py-7'>Anda belum punya akun?<Link href='/auth/option'><span className='cursor-pointer text-[#FBB017] font-semibold'>Daftar disini</span></Link></h2>
      </div>
    </div>
  )
}

export default LoginComp