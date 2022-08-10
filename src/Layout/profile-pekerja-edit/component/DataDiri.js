import { useState } from "react"



const DataDiri = () => {
    const [addData, setAddData] = useState({

    })
    // const formData = new formData
    // formData.append("name",addData?.name)
    // formData.append("job", addData?.job)
    // formData.append("domicile",addData?.domicile)
    // formData.append("instagram", addData?.instagram)
    // formData.append("github", addData?.github)
    // formData.append("gitlab", addData?.gitlab)
    // formData.append("description", addData?.description)
    const handlesubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="bg-white rounded-lg shadow-2xl">
                <div className="border-b-2">
                    <h1 className="font-bold text-2xl py-4 ml-10">
                        Data diri
                    </h1>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="flex flex-col mx-10 m-3 text-[#9EA0A5]">
                        <div className="mt-5">
                            <div className="flex flex-col">
                                <p className="mb-3 font-bold text-base">
                                    Name Lengkap :
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
                        
                                            " type="text" placeholder="Masukan nama lengkap" />
                            </div>
                        </div>
                        <div className="mt-5 sm:flex justify-between">
                            <div className="flex flex-col sm:w-1/2">
                                <p className="mb-3 font-bold text-base">
                                    Job desk :
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
                        
                                " type="text" placeholder="Masukkan job desk" />
                            </div>
                            <div className="flex flex-col sm:w-1/2 mt-1 sm:ml-3">
                                <p className="mb-3 font-bold text-base">
                                    Job Status :
                                </p>
                                <select name="jobStatus" id="jobStatus" className="
                                text-black
                                border-2
                                mt-2
                                block 
                                w-full 
                                px-2 py-2.5 
                                bg-white 
                                border-[#9EA0A5]
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                                ">
                                    <option value="fulltime" className="text-center py-2 px-2">fulltime</option>
                                    <option value="freelancer" className="text-center py-2 px-2">freelancer</option>
                                </select>

                            </div>
                        </div>
                        {/* <div className="mt-5">
                            <div className="flex flex-col">
                                <p className="mb-3 font-bold text-base">
                                    Job Status :
                                </p>
                                <select name="cars" id="cars" className="
                                text-base
                                text-black
                                px-2 
                                py-2 
                                border-b-2
                                border-[#9EA0A5]
                                rounded-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                ">
                                    <option value="fulltime" className="text-center py-2 px-2">fulltime</option>
                                    <option value="freelancer" className="text-center py-2 px-2">freelancer</option>
                                </select>

                            </div>
                        </div> */}
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
                        
                                             " type="text" placeholder="Masukkan domisili" />
                            </div>
                        </div>
                        <div className="">
                            <div className="lg:flex justify-between mt-7">
                                <div className="flex flex-col md:mr-5">
                                    <h1 className="mb-2 mt-2">
                                        Instagram :
                                    </h1>
                                    <input className="
                                        placeholder:text-[12px]
                                        text-sm
                                        px-2
                                        py-2
                                        rounded-md
                                        bg-white
                                        text-black
                                        border
                                        border-[#9EA0A5]
                                        focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                        focus:outline-none
                                        " placeholder="Masukkan username IG" type="text" />
                                </div>

                                <div className="flex flex-col md:mr-5">
                                    <h1 className="mb-2 mt-2">
                                        Github :
                                    </h1>
                                    <input className="
                                        placeholder:text-[12px]
                                        text-sm
                                        px-2
                                        py-2
                                        rounded-md
                                        bg-white
                                        text-black
                                        border
                                        border-[#9EA0A5]
                                        focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                        focus:outline-none
                                        " placeholder="Masukkan username Github" type="text" />
                                </div>

                                <div className="flex flex-col md:mr-5">
                                    <h1 className="mb-2 mt-2">
                                        Gitlab :
                                    </h1>
                                    <input className="
                                            placeholder:text-[12px]
                                            text-sm
                                            px-2
                                            py-2
                                            rounded-md
                                            bg-white
                                            text-black
                                            border
                                            border-[#9EA0A5]
                                            focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                            focus:outline-none
                                            " placeholder="Masukkan username Gitlab" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <h1 className="mb-5 font-bold">
                                Deskripsi singkat :
                            </h1>
                            <textarea className="
                                focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none
                                w-full h-48 border-2 border-[#9EA0A5] rounded-md bg-white p-3"
                                placeholder="Tuliskan deskrispi singkat">

                            </textarea>
                            <div className="flex justify-end mt-2">
                                <button onClick={handlesubmit} className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold mb-5 mt-2">
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DataDiri