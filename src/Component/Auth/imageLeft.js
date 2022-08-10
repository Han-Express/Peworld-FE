import React from 'react'

const ImageLeft = () => {
  return (
    <div className='hidden w-2/5 md:flex h-screen'>

      <div className='sm:absolute md:mx-3'><img className='h-screen' src='/img/imageAuth.png' /></div>
      <div className='sm:absolute sm:w-2/5 h-screen bg-[#5E50A1] opacity-70'>
      </div>
      <div className='relative py-20 md:px-16'>
        <div className='flex items-center'>
            <div><img src='/img/logo.png'/></div>
            <h2 className='text-white md:ml-3 py-3'>Peworld</h2>
          </div>
          <h1 className='font-semibold leading-normal text-white text-4xl md:pt-28'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
        </div>
    </div>
  )
}

export default ImageLeft