import React, { useState } from "react";
import Layout from "../../Component/Layout";
import { HiOutlineMail } from 'react-icons/hi'
import {TiSocialInstagram} from 'react-icons/ti'
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import Portfolio from "./Portfolio";
import PengalamanKerja from "./PengalamanKerja";
import { useRouter } from "next/router";

const CompanyProfile = () => {
  // const router = useRouter();
  // const handleClick = (e) => {
  //   router.push(`/comp-profile?page=${e.target.value}`);
  // }
  const [page, setPage] = useState("")
  return(
    <>
    <Layout>
    <div className="bg-slate-100 pb-16">
      <div className="bg-violet-700 h-80 w-full"></div>
        <div className="my-5 flex w-5/6 mx-auto -mt-64">
          <div className="bg-white rounded-xl p-6 w-1/3 border-2 mr-10 justify-around">
            <div>
              <img className="mx-auto" src="/img/companyProfile.png"/>
            </div>
              <h1 className="mt-5 text-lg font-semibold">Louis Tomlison</h1>
            <div className="text-sm my-4">
              <p>Web Developer</p>
              <p className="text-slate-600 mt-2">Freelancer</p>
            </div>
            <div className="text-sm text-slate-600 mt-3 leading-6">
              <p>Purwokerto, Jawa Tengah</p>
              <p>0812-3456-789</p>
            </div>
            <div className="text-sm text-slate-600 mt-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <button className="bg-violet-700 hover:opacity-90 transition p-2 my-6 rounded-md w-11/12 text-white font-semibold">Hire</button>
            <div>
              <div className="text-lg font-semibold">
                <p>Skill</p>
              </div>
              <div className="flex flex-wrap">
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Phyton</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Laravel</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Golang</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Javascript</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">PHP</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">HTML</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">C++</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Kotlin</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Swift</p>
              </div>
            </div>
            <div className="text-sm text-slate-900 mt-10">
                    <p className="flex items-center my-4"><span className="mr-2 mt-1"><HiOutlineMail/></span>Louistommo@gmail.com</p>
                    <p className="flex items-center my-4"><span className="mr-2 mt-1"><TiSocialInstagram/></span>@Louist91</p>
                    <p className="flex items-center my-4"><span className="mr-2 mt-1"><AiFillGithub/></span>@Louistommo</p>
                    <p className="flex items-center my-4"><span className="mr-2 mt-1"><AiFillGitlab/></span>@Louistommo91</p>
                  </div>
          </div>
        <div className="bg-white rounded-xl p-5 w-full h-fit">
          <div className="px-2 py-2">
            <div>
              <button className={`hover:underline font-semibold focus:underline focus:text-violet-700 mr-5 underline-offset-8 ${page === 'Portfolio' ? 'underline text-violet-700' : 'text-slate-700'}`}  onClick={(e) => setPage(e.target.value)} value={'Portfolio'}>
                Portfolio
              </button>
              <button className={`hover:underline  font-semibold focus:underline focus:text-violet-700 underline-offset-8 ${page === 'PengalamanKerja' ? 'underline text-violet-700' : 'text-slate-700'}`} onClick={(e) => setPage(e.target.value)} value={'PengalamanKerja'}>
                Pengalaman Kerja
              </button>
            </div>
          </div>
          {page === "Portfolio" ? <Portfolio/> : <PengalamanKerja/>}
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default CompanyProfile;