
import Link from "next/link"
import { useSelector } from "react-redux"



const ProfileCompany = ({ company, handleUpdate }) => {

    const {data} = useSelector(state => state.auth)
    return (
        <>
            {/* profile company */}
            <div className="md:w-1/3 h-full  md:mr-8 rounded-lg bg-white ">
                <div className="md:flex flex-col px-1 py-2 rounded-2xl mb-5 shadow-2xl">
                    <div className="flex flex-row justify-center mt-5">
                        <div class="avatar">
                            <div class="w-36 rounded-full">
                                <img src={`${process.env.REACT_APP_URL_BE}static/${company[0].image}`} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center my-5">
                        <img className="w-4 mr-3" src="/img/edit.svg" />
                        <p className="text-xl font-bold text-[#9EA0A5]">
                            EDIT
                        </p>
                    </div>

                    <div className="md:flex flex-col mx-10">
                        <h1 className="text-xl font-bold mb-5 mt-7">
                            {company[0].company_name}
                        </h1>
                        <p className="mb-3">
                            {company[0].sector}
                        </p>
                        <div className="flex flex-row text-[#9EA0A5]">
                            <img className="mr-3" src="/img/location.svg" />
                            <p>
                                {company[0].domicile}
                            </p>
                        </div>
                        <p className="text-justify text-[#9EA0A5] mt-4 mb-7">
                            {company[0].description}
                        </p>
                    </div>
                </div>
                <div className="">
                    <Link href={`/profile/comp-profile/edit/${data.userId}`}>
                        <button className="bg-[#5E50A1] px-4 py-4 w-full text-xl font-bold rounded-md mb-3 mt-5 text-white"
                            onClick={handleUpdate}
                        >
                            Simpan
                        </button>
                    </Link>
                    <Link href={'#'}>
                        <button className="border-[#5E50A1] border-2 px-4 py-4 w-full md:text-xl font-bold rounded-md mb-3 mt-5 text-[#5E50A1]">
                            Kembali
                        </button>
                    </Link>

                </div>
            </div>
        </>
    )
}
export default ProfileCompany