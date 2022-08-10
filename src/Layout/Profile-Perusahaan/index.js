import Layout from '../../Component/Layout'
import { HiOutlineMail } from 'react-icons/hi'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { FiMapPin } from 'react-icons/fi'
import Link from 'next/link'


const CompanyProfile = ({companies}) => {
  return (
    <Layout>
    <div className="bg-slate-300 pt-12 py-32 ">
    <div className="font-sans bg-[#5E50A1] h-48 w-11/12 mx-auto md:w-3/5 rounded-2xl"></div>
        <div className="-mt-24 bg-white mx-auto rounded-b-2xl w-11/12 md:w-3/5"> 
          <div className="flex flex-col items-center p-4">
            <img className="my-4" src={`http://localhost:5000/static/${companies[0].image}`}/>
            <h1 className="mt-4 text-2xl font-semibold">{companies[0].company_name}</h1>
            <p className="mt-2 text-sm">{companies[0].sector}</p>
              <div className="text-center text-sm w-3/6 mt-2 text-slate-600">
                <p className="flex text-center justify-center text-sm mb-2"><span className="mr-2 mt-1"><FiMapPin/></span>{companies[0].domicile}</p>
                <p>{companies[0].description}</p>
                <Link href="/profile/comp-profile/edit">
                <button className="bg-[#5E50A1] hover:opacity-90 transition p-2 my-6 rounded-md w-3/5 text-white font-semibold">Edit Profile</button>
                </Link>
              </div>
                <div className="text-base text-slate-600">
                  <p className="flex items-center text-sm my-4"><span className="mr-2 mt-1"><HiOutlineMail/></span>{companies[0].email}</p>
                  <p className="flex items-center text-sm my-4"><span className="mr-2 mt-1"><TiSocialInstagram/></span>{companies[0].instagram}</p>
                  <p className="flex items-center text-sm my-4"><span className="mr-2 mt-1"><BiPhoneCall/></span>{companies[0].phone_number}</p>
                  <p className="flex items-center text-sm my-4"><span className="mr-2 mt-1"><AiFillLinkedin/></span>{companies[0].linked_in}</p>
                </div>
          </div>
        </div>
        </div>
        </Layout>
  )
}

export default CompanyProfile