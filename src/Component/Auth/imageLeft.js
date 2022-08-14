import React from 'react'

const ImageLeft = () => {
  return (
    <div className='hidden w-1/2 md:flex h-full flex-col mr-10'>
      <div className='sm:relative md:mx-3 flex flex-col'>
        <img className='h-screen' src='/img/imageAuth.png' />
        <div className='sm: sm:w-full absolute w-10 h-screen bg-[#5E50A1] opacity-70'>
        </div>
      </div>
      <div className='py-20 md:px-16 absolute w-1/2 '>
        <div className='flex items-center'>
          <div>
            <img src='/img/logo.png' />
          </div>
          <h2 className='text-white md:ml-3 py-3'>
            Peworld
          </h2>

        </div>
        <div className='w-3/4'>
          <h1 className='font-semibold leading-normal text-white text-5xl md:pt-28 text-left'>
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ImageLeft