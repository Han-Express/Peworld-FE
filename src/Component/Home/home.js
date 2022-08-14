import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTalent } from "../../redux/action/talent"
import { useRouter } from 'next/router'

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
    }, [filter])


    return (
        <div className='sm:flex flex-col ms:px-5 py-14 justify-content items-center bg-[#E5E5E5] h-full w-full sm:mb-40'>
            <div className='bg-white rounded h-14 mb-8 flex md:w-4/5 justify-between items-center mx-2'>
                <div className='flex w-full relative items-center justify-between border-r-[2px] border-gray-200 mx-2'>
                    <div className='flex w-full sm:px-4'>
                        <input text="input" name="search" placeholder="Search for any skill" aria-label="Search for any skill" className="outline-none w-full sm:px-3 py-2 placeholder-gray-500 text-black rounded-xl border-gray-200" onChange={(e) => {
                            setSkill(e.target.value)
                        }} />
                    </div>
                    <button onClick={handleFilter} className='mx-2 sm:w-10 sm:h-10'><img src='/img/search.png'></img></button>
                </div>
                <div className='flex mx-2'>
                    <div class='flex justify-center items-center'>
                        <div class="sm:relative text-right">
                            <select className="py-1 sm:px-3 sm:mr-2 sm:ml-2 text-gray-600 text-sm bg-white focus:outline-none" role="none" onChange={(e) => {
                                setFilter(prevData => ({
                                    ...prevData,
                                    job_status: e.target.value
                                }))
                            }}>
                                <option value='' className="text-gray-700 block sm:px-4 sm:py-2 sm:text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Category</option>
                                <option value='' className="text-gray-700 block sm:px-4 sm:py-2 sm:text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Skill</option>
                                <option value='freelance' className="text-gray-700 block sm:px-4 sm:py-2 sm:text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Freelance</option>
                                <option value='fulltime' className="text-gray-700 block sm:px-4 sm:py-2 sm:text-sm cursor-pointer hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Sort by Fulltime</option>
                            </select>
                        </div>
                    </div>
                    <div className=''>
                        <button className='
                        rounded bg-[#5E50A1] 
                        text-white 
                        sm:px-6 
                        sm:py-2
                        py-2
                        px-2
                        mr-6 
                        w-full
                        sm:h-full 
                        text-sm 
                        hover:bg-violet-600' onClick={handleFilter}>Search</button>
                    </div>
                </div>
            </div>


            <div className='bg-white rounded sm:w-4/5'>
                {data?.data?.map((item) => {
                    return (
                        <>
                            <div className='sm:flex sm:px-4 py-4 mt-4 mb-4 ml-2 mr-2 items-center sm:justify-between'>
                                <div className='sm:flex'>
                                    <div className='flex justify-center'>
                                        <img className='px-3 py-4' src={`https://coral-app-3yjfb.ondigitalocean.app/static/${item.image}`}></img>
                                    </div>
                                    <div className='ml-4'>
                                        <h1 className='font-bold text-lg'>{item.name}</h1>
                                        <h2 className='mt-2'>{item.job} - {item.job_status}</h2>
                                        <div className='flex items-center mt-2 sm:w-4/5'>
                                            <div>
                                                <img className='mr-3' src='/img/map.png'></img>
                                            </div>
                                            <h2>{item.domicile}</h2>
                                        </div>
                                        <div className='flex mt-4 w-full'>
                                            {item.skill.map((item) => {
                                                console.log(item.skill, 'cek isi data skill baru')
                                                return (
                                                    <button className={`${item.skill_id ? `px-4 py-1 text-sm sm:mr-3 w-full bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400` : `px-4 py-1 text-sm mr-3 bg-orange-300 border border-orange-500 text-white rounded hover:bg-orange-400`}`}>{item}</button>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                                <div className='mx-3'>
                                    <Link href={`/profile/${item.user_id}`}>
                                        <button className='rounded bg-[#5E50A1] text-white mt-3 md:w-full w-full px-4 py-3 mr-6 sm:h-1/2 text-sm hover:bg-violet-600'>Lihat Profile</button>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}


            </div>
            <div className='mt-8 flex items-center justify-center'>
                {totalPages.map((item, index) => {
                    return <button onClick={() => (handlePaginate(index))} 
                    className={`${data.page === index + 1 ? 
                    `bg-white
                     mr-1 
                     ml-1 
                     text-slate-400 
                     px-4 
                     py-2.5 
                     rounded 
                     border 
                     border-gray-300 
                     hover:bg-violet-800` : 
                     `bg-white 
                     mr-1 
                     ml-1 
                     text-slate-400 
                     px-4 
                     py-2.5 
                     rounded border 
                     border-gray-300 
                     hover:bg-violet-800`}`}
                    >{index + 1}</button>
                })}

            </div>
        </div>
    )
}

export default Homecomp