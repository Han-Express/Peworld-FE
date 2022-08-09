

const Skill = () => {
    return (
        <>
            <div className="bg-white mt-10 rounded-lg shadow-xl">
                <div className="border-b-2">
                    <h1 className="font-bold text-2xl py-4 ml-10">
                        Skill
                    </h1>
                </div>
                <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
                    <div className="md:flex justify-between items-center">
                        <input type='text' className="
                                    py-2
                                    px-2
                                    w-full
                                    my-2.5
                                    bg-white
                                     border-2
                                     md:mr-10
                                     rounded-md shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]
                                    "
                            placeholder="Java"
                        />
                        <div className="">
                            <button className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold">
                                Simpan
                            </button>
                        </div>

                    </div>
                    <div className="flex bg-[#FBB017]/60 border-[#FBB017] border-2 mt-10 mb-10 w-32 p-2 justify-between rounded-md">
                        <p className="text-white font-bold">
                            Python
                        </p>
                        <div className="flex flex-row justify-end">
                            <img className="mr-2 w-4" src="/img/edit_white.svg" />
                            <button>
                                <img className="w-3" src="/img/delete.svg" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill