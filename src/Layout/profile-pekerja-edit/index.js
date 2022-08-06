



const ProfilePekerjaLayout = () => {
    return (
        <>
            <main className="flex flex-col">
                <div className="bg-[#5E50A1] w-full h-96 relative">
                </div>
                <div className="flex mx-32 absolute mt-16">
                    <div className="w-2/5 h-full  mr-10 rounded-lg bg-white ">
                        <div className="flex flex-col px-1 py-2 rounded-2xl mb-5 shadow-2xl">
                            <div className="flex flex-row justify-center mt-10">
                                <div class="avatar">
                                    <div class="w-52 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center my-5">
                                <img className="w-5 mr-3" src="/img/edit.svg" />
                                <p className="text-2xl font-bold text-[#9EA0A5]">
                                    EDIT
                                </p>
                            </div>
                            <div className="flex flex-col mx-16">
                                <h1 className="text-2xl font-bold mb-5 mt-10">
                                    LOUIS TOMLISON
                                </h1>
                                <p className="mb-1">
                                    Web Developer
                                </p>
                                <p className="mb-1 text-[#9EA0A5]">
                                    Freelancer
                                </p>
                                <div className="flex flex-row text-[#9EA0A5]">
                                    <img className="mr-3" src="/img/location.svg" />
                                    <p>
                                        Purwokerto, Jawa Tengah
                                    </p>
                                </div>
                                <div className="flex flex-row text-[#9EA0A5]">
                                    <img className="mr-3" src="/img/phone.svg" />
                                    <p>
                                        0812 - 3456 - 789
                                    </p>
                                </div>
                                <p className="text-justify text-[#9EA0A5] mt-4 mb-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-[#5E50A1] p-4 w-full text-xl font-bold rounded-md mb-3 mt-5 text-white">
                                Ubah Password
                            </button>
                            <button className="border-[#5E50A1] border-2 p-4 w-full text-xl font-bold rounded-md mb-3 mt-5 text-[#5E50A1]">
                                Kembali
                            </button>
                        </div>
                    </div>


                    {/* </div> */}


                    <div className="w-3/5 h-full flex flex-col mb-32">
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
                                <div className="mt-5">
                                    <div className="flex flex-col">
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
                        
                                             " type="text" placeholder="Masukkan domisili" />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full mt-5">
                                    <div className="flex flex-col">
                                        <h1 className="mb-2">
                                            Instagram :
                                        </h1>
                                        <input className="
                                    placeholder:text-[12px]
                                    text-sm
                                    px-3
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

                                    <div className="flex flex-col">
                                        <h1 className="mb-2">
                                            Github :
                                        </h1>
                                        <input className="
                                    placeholder:text-[12px]
                                    text-sm
                                    px-3
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

                                    <div className="flex flex-col">
                                        <h1 className="mb-2">
                                            Instagram :
                                        </h1>
                                        <input className="
                                    placeholder:text-[12px]
                                    text-sm
                                    px-3
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
                                        <button className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold mb-5 mt-2">
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mt-10 rounded-lg shadow-xl">
                            <div className="border-b-2">
                                <h1 className="font-bold text-2xl py-4 ml-10">
                                    Skill
                                </h1>
                            </div>
                            <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
                                <div className="flex flex-row justify-between">
                                    <input type='text' className="
                                    p-2
                                     w-full
                                     bg-white
                                     border-2
                                     mr-10
                                     rounded-md shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                    "
                                        placeholder="Java"
                                    />
                                    <button className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold">
                                        Simpan
                                    </button>
                                </div>
                                <div className="flex bg-[#FBB017]/60 border-[#FBB017] border-2 mt-10 mb-10 w-32 p-2 justify-between rounded-md">
                                    <p className="text-white font-bold">
                                        Python
                                    </p>
                                    <div className="flex flex-row justify-end">
                                        <img className="mr-2 w-4" src="/img/edit_white.svg" />
                                        <img className="w-3" src="/img/delete.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mt-10 rounded-lg shadow-xl">
                            <div className="border-b-2">
                                <h1 className="font-bold text-2xl py-4 ml-10">
                                    Pengalaman Kerja
                                </h1>
                            </div>
                            <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
                                <div className="flex flex-row justify-between">
                                    <div className="w-1/2 mr-10">
                                        <p className="">
                                            Nama Perusahaan :
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
                                        " type="text" placeholder="PT Apa aja" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="">
                                            Posisi :
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
                                        " type="text" placeholder="Web developer" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between mt-10">
                                    <div className="w-1/2 mr-10">
                                        <p className="">
                                            Tanggal Masuk :
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
                                        " type="text" placeholder="DD-MM-YYYY" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="">
                                            Tanggal Keluar :
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
                                        " type="text" placeholder="DD-MM-YYYY" />
                                    </div>

                                </div>
                                <div className="mt-7 mb-7">
                                    <h1 className="mb-5 font-bold">
                                        Deskripsi singkat :
                                    </h1>
                                    <textarea className="
                                        focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none
                                        w-full h-40 border-2 border-[#9EA0A5] rounded-md bg-white p-3"
                                        placeholder="Deskripsikan pekerjaan anda">
                                    </textarea>
                                </div>

                                <div className="border-y-2 mb-32">
                                    <button className="border-2 text-[#FBB017] text-lg font-bold border-[#FBB017] w-full p-2 my-10 rounded-sm">
                                        Tambah pengalaman kerja
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="bg-white mt-10 rounded-lg shadow-xl">
                            <div className="border-b-2">
                                <h1 className="font-bold text-2xl py-4 ml-10">
                                    Portofolio
                                </h1>
                            </div>
                            <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
                                <div className="flex flex-col">
                                    <div className="w-full mr-10">
                                        <p className="">
                                            Nama Aplikasi :
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
                                        " type="text" placeholder="Masukkan nama aplikasi" />
                                    </div>
                                    <div className="w-full mt-7">
                                        <p className="">
                                            Link Repository :
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
                                        " type="text" placeholder="Masukkan link repository" />
                                    </div>
                                </div>

                                <form action="" className="flex flex-col">
                                    {/* <input type="file" multiple > */}
                                    {/* <input className="w-full h-96 border-4 border-dashed bg-white border-gray-400 relative" type="file" /> */}
                                    <div className="flex-col border-8 border-dashed mt-10 py-10 border-gray-400">
                                        <div className="flex justify-center">
                                            <img className="flex justify-center" src="/img/cloud.svg" />
                                        </div>
                                        <p className="text-center">
                                            Drag & Drop untuk Upload Gambar Aplikasi Mobile
                                        </p>
                                        <p className="text-center text-sm mb-5">
                                            Atau cari untuk mengupload file dari direktorimu.
                                        </p>
                                        <div className="flex flex-row justify-center mb-10 mt-10">
                                            <div className="flex mr-10 items-center">
                                                <img className="w-9 mr-3" src="/img/photo.svg" />
                                                <div className="flex flex-col text-sm">
                                                    <p className="text-sm">
                                                        High-Res Image
                                                    </p>
                                                    <p>
                                                        PNG, JPG or GIF
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <img className="w-9 mr-3" src="/img/size.svg" />
                                                <div className="flex flex-col text-sm">
                                                    <p>
                                                        Size
                                                    </p>
                                                    <p>
                                                        1080x1920 or 600x800
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </input> */}
                                </form>

                                <div className="border-y-2 mt-10 mb-32">
                                    <button className="border-2 text-[#FBB017] text-lg font-bold border-[#FBB017] w-full p-2 my-10 rounded-sm ">
                                        Tambah portofolio
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    )

}

export default ProfilePekerjaLayout