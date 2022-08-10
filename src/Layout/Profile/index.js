import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { HiOutlineMail } from 'react-icons/hi'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import Portfolio from "./Portfolio";
import PengalamanKerja from "./PengalamanKerja";
import Link from "next/link";
import { useSelector } from "react-redux";

const Profile = ({ employees, portfolio, skill, experience }) => {
  const [page, setPage] = useState("")

  const {data} = useSelector(state => state.auth)

  return (
    <>
      <Layout>
        <div className="bg-slate-100 pb-16">
          <div className="bg-[#5E50A1] h-80 w-full"></div>
          <div className="flex my-5 md:flex-row w-5/6 mx-auto -mt-64 flex-col">
            <div className="bg-white rounded-xl p-6 md:w-1/3 mb-10 w-full border-2 mr-10 justify-around">
              <div>
                <img className="mx-auto" src={`https://coral-app-3yjfb.ondigitalocean.app/static/${employees[0].image}`} />
              </div>
              <h1 className="mt-5 text-lg font-semibold">{employees[0].name}</h1>
              <div className="text-sm my-4">
                <p>{employees[0].job}</p>
                <p className="text-slate-600 mt-2">{employees[0].job_status}</p>
              </div>
              <div className="text-sm text-slate-600 mt-3 leading-6">
                <p>{employees[0].domicile}</p>
                <p>{employees[0].phone_number}</p>
              </div>
              <div className="text-sm text-slate-600 mt-2">
                <p>{employees[0].description}</p>
              </div>
              {data?.role==="recruiter" ? <Link href={`/hire/${data.userId}`}>
                <button className="bg-[#5E50A1] hover:opacity-90 transition p-2 my-6 rounded-md w-full text-white font-semibold">Hire</button>
              </Link>: <Link href={`/profile/edit/${data.userId}`}>
                <button className="bg-[#5E50A1] hover:opacity-90 transition p-2 my-6 rounded-md w-full text-white font-semibold">Edit</button>
              </Link>}
              <div>
                <div className="text-lg font-semibold">
                  <p>Skill</p>
                </div>
                <div className="flex flex-wrap">
                  {skill.map((item) => {
                    return (
                      <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700" key={item.skill_id}>{item.skill}</p>
                    )
                  })}
                </div>
              </div>
              <div className="text-sm text-slate-900 mt-10">
                <p className="flex items-center my-4"><span className="mr-2 mt-1"><HiOutlineMail /></span>{employees[0].email}</p>
                <p className="flex items-center my-4"><span className="mr-2 mt-1"><TiSocialInstagram /></span>{employees[0].instagram}</p>
                <p className="flex items-center my-4"><span className="mr-2 mt-1"><AiFillGithub /></span>{employees[0].github}</p>
                <p className="flex items-center my-4"><span className="mr-2 mt-1"><AiFillGitlab /></span>{employees[0].gitlab}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 w-full h-fit">
              <div className="px-2 py-2">
                <div>
                  <button className={`hover:underline font-semibold focus:underline focus:text-[#5E50A1] mr-5 underline-offset-8 ${page === 'Portfolio' ? 'underline text-[#5E50A1]' : 'text-slate-700'}`} onClick={(e) => setPage(e.target.value)} value={'Portfolio'}>
                    Portfolio
                  </button>
                  <button className={`hover:underline  font-semibold focus:underline focus:text-[#5E50A1] underline-offset-8 ${page === 'PengalamanKerja' ? 'underline text-[#5E50A1]' : 'text-slate-700'}`} onClick={(e) => setPage(e.target.value)} value={'PengalamanKerja'}>
                    Pengalaman Kerja
                  </button>
                </div>
              </div>
              {page === "Portfolio" ? <Portfolio portfolio={portfolio} /> : <PengalamanKerja experience={experience} />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Profile;