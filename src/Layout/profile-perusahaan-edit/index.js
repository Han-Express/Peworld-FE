



const ProfilePerusahaanLayout = () => {
    return (
        <>
           
            <main className="flex flex-col">
                <div className="bg-[#5E50A1] md:w-auto h-96 relative">
                </div>
                <div className="lg:flex lg:mx-32 px-3 absolute mt-16">
                    <div className="md:w-1/3 h-full  md:mr-8 rounded-lg bg-white ">
                        <div className="md:flex flex-col px-1 py-2 rounded-2xl mb-5 shadow-2xl">
                            <div className="flex flex-row justify-center mt-5">
                                <div class="avatar">
                                    <div class="w-36 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
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
                                    PT. Martabat Jaya Abadi
                                </h1>
                                <p className="mb-3">
                                    Financial
                                </p>
                                <div className="flex flex-row text-[#9EA0A5]">
                                    <img className="mr-3" src="/img/location.svg" />
                                    <p>
                                        Purwokerto, Jawa Tengah
                                    </p>
                                </div>
                                <p className="text-justify text-[#9EA0A5] mt-4 mb-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-[#5E50A1] px-4 py-4 w-full text-xl font-bold rounded-md mb-3 mt-5 text-white">
                                Simpan
                            </button>
                            <button className="border-[#5E50A1] border-2 px-4 py-4 w-full md:text-xl font-bold rounded-md mb-3 mt-5 text-[#5E50A1]">
                                Kembali
                            </button>
                        </div>
                    </div>


                    {/* </div> */}


                    <div className="md:w-2/3 h-full flex flex-col mb-10">
                        <div className="bg-white rounded-lg shadow-2xl">
                            <div className="border-b-2">
                                <h1 className="font-bold text-2xl py-4 ml-10">
                                    Data diri
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
                        
                                             " type="text" placeholder="Masukan nama perusahaan" />
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
                        
                                             " type="text" placeholder="Masukan bidang perusahaan ex: Financial" />
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
                        
                                             " type="text" placeholder="Masukkan Domisili" />
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
                        
                                             " type="text" placeholder="Masukan email" />
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
                        
                                             " type="text" placeholder="Masukan username IG" />
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
                        
                                             " type="text" placeholder="Masukan nomor telepon" />
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
                        
                                             " type="text" placeholder="Masukan nama Linkedin" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </main>

        </>
    )

}

export default ProfilePerusahaanLayout