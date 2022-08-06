import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const userId = false;
  return (
    <>
      {userId ? <nav className="mx-32">
        <div className="flex flex-row justify-between">
          <div className='flex flex-row'>
            <img className='w-48 h-48' src='/img/logo.svg' />
          </div>

          <div className='flex flex-row items-center'>

            <div className="dropdown dropdown-end mr-4">
              <label tabindex="0" class="btn btn-ghost">
                {/* <div className="w-10 rounded-full"> */}
                <img className='w-8 h-8' src="/img/bell.svg" />
                {/* </div> */}
              </label>
              <ul tabindex="0" className="mt-3 p-2 w-72 flex justify-center shadow-2xl border-2 menu menu-compact dropdown-content bg-base-100 rounded-box">
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
                <img className="mr-6 w-7 h-7" src='/image/chat.svg' />
              </a>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <Link href='/profile'>
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
      </nav> : <nav className=" mx-32">
        <div className="flex flex-row justify-between items-center">
          <div className='flex flex-row'>
            <img className='w-48 h-48' src='/img/logo.svg' />
          </div>
          <div>
            <Link href="/auth/login">
              <button className="text-base font-bold mr-3 border-2 border-[#5E50A1] rounded-md px-6 py-3">
                MASUK
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className='border-1 ml-6 bg-[#5E50A1] text-white text-base rounded-md px-6 py-3'>
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