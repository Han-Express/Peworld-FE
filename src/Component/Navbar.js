import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Logout } from '../redux/action/auth'
import Swal from 'sweetalert2'
import { io } from 'socket.io-client' 
import axios from 'axios'
import { addSocket } from '../redux/action/socket'
import { current } from 'daisyui/src/colors'
import { NextResponse } from 'next/server'
import { getUser } from '../redux/action/getUser'
import Image from 'next/image'

const Navbar = () => {
  const { data, error, isLogin } = useSelector((state) => state.auth)
  const {data: user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const genSocket = useRef(io(process.env.URL_SOCKET))  
  const {socket} = useSelector(state => state.socket)
  const [notif, setNotif] = useState([]);
  console.log(data)
  useEffect(() => {
    dispatch(addSocket(genSocket.current))
     
  }, [])
  
  useEffect(() => {
   dispatch(getUser(data.userId)) 
  }, [])

  useEffect(()=> {
    socket?.emit("newUser", data.userId)
  }, [socket, data] )

  useEffect(() => {
    socket?.on("getMessage", (data) => {
      setNotif((prev) => [...prev, data])
    })
  }, [socket])

  return (
    <>
      {isLogin ? <nav className="md:px-24 bg-white shadow-2xl sticky top-0" style={{zIndex: 999}}>
        <div className="flex flex-row  justify-between navbar items-center">
          <Link href={`/home`}>
            <div className='flex flex-row'>
              <img className='' src='/img/logo.svg' />
            </div>
          </Link>
          <div className='flex flex-row items-center'>
            {notif.length !== 0 ? <div className=''>{notif.length}</div> : null}
            <div className="dropdown dropdown-end mr-3 md:mr-8">
              <label tabindex="0" className="" >
                <img className='w-6 h-6' src="/img/bell.svg" />
              </label>
              <ul tabindex="0" className="mt-3 p-2 md:w-72 flex justify-center shadow-2xl border-2 menu menu-compact dropdown-content bg-base-100 rounded-box">
                <div className=' px-2 py-5 mx-1 flex flex-wrap'>
                  {notif?.map((item) => {
                    
                    return item.header ?
                     (
                      <div>
                      <h3>from: {item.user}</h3>
                      <p>ingin membahas mengenai {item.header}</p>
                    </div>
                    ) :  (
                      <div>
                        <h3>from: {item.user}</h3>
                        <p>Ada Messages</p>
                      </div>
                    )
                  }
                    
                  )}
                </div>
              </ul>
            </div>
            <Link href="/chat">
              <a>
                <img className="mr-3 md:mr-8 w-6 h-6" src='/img/chat.svg' />
              </a>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user ? user?.data?.map((item) => <img
                  className='w-full object-cover' 
                  src={`${process.env.REACT_APP_URL_BE}static/${item.image}`}
                  alt='profile'
                   />) :
                  <img
                    className='w-full object-cover'
                    src="/img/profileDefault.jpg"
                    alt='profile'
                  />
                   }
                </div>
              </label>
              <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <Link href={data?.role === 'employee' ? `/profile/${data.userId}` : `/profile/comp-profile/${data.userId}`}>
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">Edit</span>
                    </a>
                  </li>
                </Link>
                <li><a>Settings</a></li>
                <li onClick={() => {
                  dispatch(Logout())
                  document.cookie = `token=''; path=/; expires=${new Date(0)}`
                  Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Logout Success',
                  })
                  router.push('/')
                }} ><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav> : <nav className="md:px-24 bg-white shadow-2xl sticky top-0 " style={{zIndex: 999}} >
        <div className="flex flex-row justify-between items-center navbar">
          <div className='flex flex-row'>
            <img className='' src='/img/logo.svg' />
          </div>
          <div>
            <Link href="/auth/login">
              <button className="text-xs font-bold mr-3 border-2 border-[#5E50A1] rounded-md px-3 py-2">
                MASUK
              </button>
            </Link>
            <Link href="/auth/option">
              <button className='border-2 ml-1 bg-[#5E50A1] border-[#5E50A1] text-white text-xs rounded-md px-3 py-2'>
                DAFTAR
              </button>
            </Link>
          </div>
        </div>
      </nav>}



    </>
  )
}

export default Navbar