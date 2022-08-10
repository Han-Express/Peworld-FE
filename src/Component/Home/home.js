import React from 'react'
import { useState } from 'react'

const Homecomp = () => {

    const [showOptions, setShowOptions] = useState(false)
    const handleClick = () => {
        setShowOptions(!showOptions)
    }

    return (
        <div className='flex flex-col ms:px-5 py-14 justify-content items-center bg-[#E5E5E5] h-full w-full'>
            <div className='bg-white rounded h-14 mb-8 flex sm:w-4/5 justify-between items-center mx-2'>
                <div className='flex w-full relative items-center justify-between border-r-[2px] border-gray-200'>
                    <div className='flex w-full px-4'>
                        <input text="input" name="search" placeholder="Search for any skill" aria-label="Search for any skill" className="outline-none w-full px-3 py-2 placeholder-gray-500 text-black rounded" />
                    </div>
                    <button className='mr-5'><img src='/img/search.png'></img></button>
                </div>
                <div className='flex'>
                    <div class='flex justify-center items-center'>
                        <div class="relative text-left">
                            <div>
                                <button onClick={handleClick} type="button" class="inline-flex justify-center w-full  px-4 py-2 bg-white text-sm text-gray-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Category
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {showOptions && (
                                <div class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Skill</h2>
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">Sort by Freelance</h2>
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">Sort by Fulltime</h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white px-6 py-2 mr-6 h-1/2 text-sm hover:bg-violet-600'>Search</button>
                </div>
            </div>
            <div className='bg-white rounded sm:w-4/5 ml-10'>
                <div className='flex sm:px-4 px-2 sm:py-4 mt-4 mb-4 ml-2 mr-2 items-center sm:justify-between bg-yellow-200'>
                    <div className='sm:flex'>
                        <div>
                            <img className='sm:px-3 sm:py-4' src='/img/ProfileHome1.png'></img>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-lg'>Louis Tomlinson</h1>
                            <h2 className='mt-2'>Web developer - Freelance</h2>
                            <div className='flex items-center mt-2 w-4/5'>
                                <div className=''>
                                    <img className='mr-10' src='/img/map.png'></img>
                                </div>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <div className='flex mt-4'>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>PHP</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>Javascript</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>HTML</button>
                            </div>
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white sm:px-4 px-2 py-2 sm:py-3 mr-6 h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                </div>
                <hr />
                <div className='flex px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center justify-between'>
                    <div className='flex'>
                        <div>
                            <img className='px-3 py-4' src='/img/ProfileHome2.png'></img>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-lg'>Harry Styles</h1>
                            <h2 className='mt-2'>Web developer - Freelance</h2>
                            <div className='flex items-center mt-2 w-4/5'>
                                <div>
                                    <img className='mr-3' src='/img/map.png'></img>
                                </div>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <div className='flex mt-4'>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>PHP</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>Javascript</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>HTML</button>
                            </div>
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white px-4 py-3 mr-6 h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                </div>
                <hr />
                <div className='flex px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center justify-between'>
                    <div className='flex'>
                        <div>
                            <img className='px-3 py-4' src='/img/ProfileHome3.png'></img>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-lg'>Niall Horan</h1>
                            <h2 className='mt-2'>Web developer - Freelance</h2>
                            <div className='flex items-center mt-2 w-4/5'>
                                <div>
                                    <img className='mr-3' src='/img/map.png'></img>
                                </div>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <div className='flex mt-4'>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>PHP</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>Javascript</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>HTML</button>
                            </div>
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white px-4 py-3 mr-6 h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                </div>
                <hr />
                <div className='flex px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center justify-between'>
                    <div className='flex'>
                        <div>
                            <img className='px-3 py-4' src='/img/ProfileHome4.png'></img>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-lg'>Liam Payne</h1>
                            <h2 className='mt-2'>Web developer - Freelance</h2>
                            <div className='flex items-center mt-2 w-4/5'>
                                <div>
                                    <img className='mr-3' src='/img/map.png'></img>
                                </div>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <div className='flex mt-4'>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>PHP</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>Javascript</button>
                                <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>HTML</button>
                            </div>
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white px-4 py-3 mr-6 h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                </div>
            </div>
            <div className='mt-8 flex items-center'>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-3 rounded border border-gray-300 hover:bg-violet-800'><img src='/img/Left.png'></img></button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>1</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>2</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>3</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>4</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>5</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>6</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-3 rounded border border-gray-300 hover:bg-violet-800'><img src='/img/Right.png'></img></button>
            </div>
        </div>
    )
}

export default Homecomp