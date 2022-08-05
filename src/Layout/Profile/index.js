import React from 'react'
import Layout from '../../Component/Layout'
import { HiOutlineMail } from 'react-icons/hi'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'

const Profile = () => {
  return (
    <Layout>
    <div className="font-sans  bg-violet-700 h-48"></div>
        <div className="-mt-24"> 
          <div className="flex flex-col items-center p-4">
            <img src="img/companyProfile.png"/>
            <h1 className="mt-4 text-2xl">PT. Martabat Jaya Abadi</h1>
            <p className="mt-2 text-sm">Financial</p>
              <div className="text-center text-sm w-3/6 mt-2 text-slate-600">
                <p className="mb-2">Purwakarta Jawa Tengah</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                <button className="bg-violet-700 hover:opacity-90 transition p-2 my-6 rounded-md w-3/5 text-white font-semibold">Edit Profile</button>
              </div>
                <div className="leading-10 text-base">
                  <p className="flex items-center"><span className="mr-2 mt-1"><HiOutlineMail/></span>martabatjaya@gmail.com</p>
                  <p className="flex items-center"><span className="mr-2 mt-1"><TiSocialInstagram/></span>martabat_jaya</p>
                  <p className="flex items-center"><span className="mr-2 mt-1"><BiPhoneCall/></span>0821-8190-1821</p>
                  <p className="flex items-center"><span className="mr-2 mt-1"><AiFillLinkedin/></span>Martabat Jaya Abadi</p>
                </div>
          </div>
        </div>
        </Layout>
  )
}

export default Profile