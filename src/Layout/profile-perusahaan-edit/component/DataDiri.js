import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";


const DataDiri = ({ company, updateData, setUpdateData }) => {

    const {data:auth} = useSelector(state => state.auth)
    const { loading, data, error } = useSelector(
        (state) => state.company
    );
    console.log(company)
    const router = useRouter()
    const dispatch = useDispatch();
    
    console.log(company[0])
    
    useEffect(() => {
        console.log(data, "xixi")
        if (data) {
            Swal.fire({
                icon: "success",
                text: "Data Successfully Updated",
            });
            router.replace(`/profile/comp-profile/edit/${auth.userId}`);
        } else if (error) {
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Please Try Again",
            });
        }
    }, [data, error])
    return (
        <>
            {/* data diri */}
            <div className="md:w-2/3 h-full flex flex-col mb-10">
                <div className="bg-white rounded-lg shadow-2xl">
                    <div className="border-b-2">
                        <h1 className="font-bold text-2xl py-4 ml-10">
                            Data Perusahaan
                        </h1>
                    </div>
                    
                        <div className="flex flex-col mx-10 m-3 text-[#9EA0A5]">
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Name Perusahaan :
                                    </p>
                                    <input className="
                                     text-black
                                     border-b-2
                                     mt-3 
                                     block 
                                     w-full 
                                     px-2 py-2 
                                     bg-white 
                                     border-[#9EA0A5]
                                     rounded-sm shadow-sm placeholder-slate-400
                                     focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                                    "
                                        value={updateData.company_name}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                company_name: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan nama perusahaan" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Bidang :
                                    </p>
                                    <input className="
                                         text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        value={updateData.sector}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                sector: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan bidang perusahaan ex: Financial" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Domisili :
                                    </p>
                                    <input className="
                                            text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        required
                                        value={updateData.domicile}
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                domicile: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukkan Domisili" />
                                </div>
                            </div>
                            <div className="mt-7">
                                <h1 className="mb-5 font-bold">
                                    Deskripsi singkat :
                                </h1>
                                <textarea className="
                                    focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none
                                     w-full h-48 border-2 border-[#9EA0A5] rounded-md bg-white p-3"
                                    value={updateData.description}
                                    onChange={(e) => {
                                        setUpdateData((prevData) => ({
                                            ...prevData,
                                            description: e.target.value
                                        }))
                                    }}
                                    placeholder="Tuliskan deskrispi singkat">

                                </textarea>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Email :
                                    </p>
                                    <input className="
                                         text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        value={updateData.email}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                email: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan email" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Instagram :
                                    </p>
                                    <input className="
                                         text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        value={updateData.instagram}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                instagram: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan username IG" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-base">
                                        Nomor Telepon :
                                    </p>
                                    <input className="
                                         text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        value={updateData.phone_number}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                phone_number: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan nomor telepon" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col mb-10">
                                    <p className="mb-3 font-bold text-base">
                                        Linkedin :
                                    </p>
                                    <input className="
                                         text-black
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-[#9EA0A5]
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             "
                                        value={updateData.linked_in}
                                        required
                                        onChange={(e) => {
                                            setUpdateData((prevData) => ({
                                                ...prevData,
                                                linked_in: e.target.value
                                            }))
                                        }}
                                        type="text" placeholder="Masukan nama Linkedin" />
                                </div>
                            </div>
                        </div>
                    
                </div>


            </div>
        </>
    )
}

export default DataDiri