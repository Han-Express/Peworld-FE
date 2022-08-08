import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const userId = true;
  const role = 'employee'
  return (
    <>
    
      {userId ? <nav className="md:px-24 bg-white ">
        <div className="flex flex-row justify-between navbar items-center">
          <div className='flex flex-row'>
            <img className='w-32 h-32' src='/img/logo.svg' />
          </div>
          <div className='flex flex-row items-center'>
            <div className="dropdown dropdown-end mr-3 md:mr-8">
              <label tabindex="0" className="">
                <img className='w-6 h-6' src="/img/bell.svg" />
              </label>
              <ul tabindex="0" className="mt-3 p-2 md:w-72 flex justify-center shadow-2xl border-2 menu menu-compact dropdown-content bg-base-100 rounded-box">
                <div className=' px-2 py-5 mx-1 flex flex-wrap'>
                  <p>
                    Aku animeee
                  </p>
                  <p>
                    Aku sayang ruka
                  </p>
                  <p>
                    Aku benci diaaaaaaaaa
                  </p>
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
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <Link href={role==='employee'?'/profile':'/profile/comp-profile'}>
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">Edit</span>
                    </a>
                  </li>
                </Link>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav> : <nav className="md:px-24 bg-white">
        <div className="flex flex-row justify-between items-center navbar">
          <div className='flex flex-row'>
            <img className='w-32 h-32' src='/img/logo.svg' />
          </div>
          <div>
            <Link href="/auth/login">
              <button className="text-xs font-bold mr-3 border-2 border-[#5E50A1] rounded-md px-3 py-2">
                MASUK
              </button>
            </Link>
            <Link href="/auth/register">
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