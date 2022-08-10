import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTalent } from "../../redux/action/talent"
import { useRouter } from 'next/router'
import { GetSkill } from "../../redux/action/skill"
import { GetbyFreelance } from '../../redux/action/skill'

const Homecomp = () => {
    const { data } = useSelector((state) => state.talent)
    console.log(data.data, 'ini data talent di home')

    // const data2 = useSelector((state) => state.skill)
    // console.log(data2, 'cek isi skill di home')
    
    const dispatch = useDispatch()
    const router = useRouter()
    
    const [refetch, setRefetch] = useState(false)
    const [page] = useState()
    const [filter, setFilter] = useState({
        limit: 2,
        page: router.query.page || 1,
        job_status: null,
    })
    const [skill, setSkill] = useState('')
    console.log(filter.page, "isi data page")

    // useEffect(() => {
    //     data?.data?.map((item) => {
    //         dispatch(GetSkill(item.user_id))  
    //     })
    // }, [data])

    useEffect(() => {
        dispatch(GetTalent(filter, skill))
    }, [refetch])

    let totalPages = Array(data?.totalPage).fill() ?? []
    console.log(totalPages, 'isinya total Page')

    const handleFilter = async (e) => {
        e.preventDefault();
        dispatch((GetTalent(filter, skill)));
        setRefetch(!refetch)
    };

    const handlePaginate = (index) => {
        setFilter(prevData => ({
            ...prevData, page: index + 1
        }));
        router.push(`/home?page=${index + 1}`)
    };

    useEffect(() => {
        dispatch(GetTalent(filter, skill))
    },[filter])


    return (
        <div className='flex flex-col px-5 py-14 justify-content items-center bg-[#E5E5E5] h-full w-full'>
            <div className='bg-white rounded h-14 mb-8 flex w-4/5 justify-between items-center '>
                <div className='flex w-full relative items-center justify-between border-r-[2px] border-gray-200'>
                    <div className='flex w-full px-4'>
                        <input text="input" name="search" placeholder="Search for any skill" aria-label="Search for any skill" className="outline-none w-full px-3 py-2 placeholder-gray-500 text-black rounded" onChange={(e) => {
                            setSkill(e.target.value)}} />
                    </div>
                    <button onClick={handleFilter} className='mr-5'><img src='/img/search.png'></img></button>
                </div>
                <div className='flex'>
                    <div class='flex justify-center items-center'>
                        <div class="relative text-left">
                            <select className="py-1 px-3 mr-2 ml-2 text-gray-600 text-sm bg-white focus:outline-none" role="none" onChange={(e) => {
                                            setFilter(prevData => ({
                                                ...prevData,
                                                job_status: e.target.value
                                            }))
                                        }}>
                                <option value='' className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Category</option>
                                <option value='' className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Skill</option>
                                <option value='freelance' className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Freelance</option>
                                <option value='fulltime' className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Fulltime</option>
                                
                                
                                {/* {filter.job_status == 'freelance' ? (
                                    <>
                                    <option value className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Freelance</option>
                                    <option className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Fulltime</option>
                                    </>
                                ) : (
                                    <>
                                    <option className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Fulltime</option>
                                    <option className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Freelance</option>
                                    </>
                                )} */}
                                

                            </select>
                            {/* {showOptions && (
                                <div class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none" onChange={(e) => {
                                            setFilter(prevData => ({
                                                ...prevData,
                                                job_status: e.target.value
                                            }))
                                        }}>
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Skill</h2>
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">Sort by Freelance</h2>
                                        <h2 class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">Sort by Fulltime</h2>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <button className='rounded bg-[#5E50A1] text-white px-6 py-2 mr-6 h-1/2 text-sm hover:bg-violet-600' onClick={handleFilter}>Search</button>
                </div>
            </div>
            <div className='bg-white rounded w-4/5'>
                {data?.data?.map((item) => {
                    return (
                        <>
                            <div className='flex px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center justify-between'>
                                <div className='flex'>
                                    <div>
                                        <img className='px-3 py-4' src={`https://coral-app-3yjfb.ondigitalocean.app/public/${item.image}`}></img>
                                    </div>
                                    <div className='ml-4'>
                                        <h1 className='font-medium text-lg'>{item.name}</h1>
                                        <h2 className='mt-2'>{item.job} - {item.job_status}</h2>
                                        <div className='flex items-center mt-2 w-4/5'>
                                            <div>
                                                <img className='mr-3' src='/img/map.png'></img>
                                            </div>
                                            <h2>{item.domicile}</h2>
                                        </div>
                                        <div className='flex mt-4'>
                                            {item.skill.map((item) => {
                                                console.log(item.skill, 'cek isi data skill baru')
                                                return (
                                                    <button className={`${item.skill_id? `px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400` : `px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400`}`}>{item}</button>
                                                )
                                            })}
                                            {/* <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>PHP</button>
                                            <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>Javascript</button>
                                            <button className='px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400'>HTML</button> */}
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/profile/${item.user_id}`}>
                                <button className='rounded bg-[#5E50A1] text-white px-4 py-3 mr-6 h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                                </Link>
                            </div>
                            <hr />
                        </>
                    )
                })}

                {/* <div className='flex px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center justify-between'>
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
                </div> */}
            </div>
            <div className='mt-8 flex items-center'>
                {totalPages.map((item, index) => {
                    return <button onClick={() => (handlePaginate(index))} className={`${data.page === index + 1 ? `bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800` : `bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800`}`}
                    >{index + 1}</button>
                })}
                {/* <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-3 rounded border border-gray-300 hover:bg-violet-800'><img src='/img/Left.png'></img></button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>1</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>2</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>3</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>4</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>5</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-2.5 rounded border border-gray-300 hover:bg-violet-800'>6</button>
                <button className='bg-white mr-1 ml-1 text-slate-400 px-4 py-3 rounded border border-gray-300 hover:bg-violet-800'><img src='/img/Right.png'></img></button> */}
            </div>
        </div>
    )
}

export default Homecomp