import React from 'react'

const ImageLeft = () => {
  return (
    <div className='hidden w-2/5 md:flex h-screen'>
      <div className='absolute mx-3'><img className='h-screen' src='/img/imageAuth.png' /></div>
      <div className='absolute w-2/5 h-screen bg-[#5E50A1] opacity-70'>
      </div>
      <div className='relative py-20 px-16'>
        <div className='flex items-center'>
            <div><img src='/img/logo.png'/></div>
            <h2 className='text-white ml-3 py-3'>Peworld</h2>
          </div>
          <h1 className='font-semibold leading-normal text-white text-4xl pt-28'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
        </div>
    </div>
  )
}

export default ImageLeft