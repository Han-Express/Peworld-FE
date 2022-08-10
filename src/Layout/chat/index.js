
const ChatLayout = () => {
    return (
        <>

         
            <main className="flex flex-col ">
                <div className='sm:flex flex-row sm:mx-32 my-20 rounded-2xl'>
                    <div className="sm:w-2/5 bg-[#5E50A1] p-10 sm:rounded-l-xl mx-2">
                        <div className='flex justify-flex justify-center items-center mb-7 sm:mx-8'>
                            <input className='
                            bg-white
                            px-5
                            h-12
                            text-xl
                            rounded-3xl
                            w-full
                        ' type='text' placeholder="search chat..." />

                        </div>
                        <h1 className="mb-10 text-white font-bold text-lg text-center">
                            Choose a staff you want to talk with
                        </h1>
                        <div className="flex flex-row mr-4 mb-10 text-white">
                            <div className="avatar mr-5">
                                <div className="w-20 h-20 rounded-full">
                                    <img src="img/profile.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg">
                                    Jason
                                </p>
                                <p className="text-base">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>

                            </div>
                        </div>
                        <hr />

                        <div className="flex flex-row mr-4 mb-10 mt-10 text-white">
                            <div className="avatar mr-5">
                                <div className="w-20 h-20 rounded-full">
                                    <img src="img/profile.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg">
                                    Jason
                                </p>
                                <p className="text-base">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-row mr-4 mb-10 mt-10 text-white">
                            <div className="avatar mr-5">
                                <div className="w-20 h-20 rounded-full">
                                    <img src="img/profile.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg">
                                    Jason
                                </p>
                                <p className="text-base">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* batas */}

                    <div className="text-black shadow-2xl sm:rounded-r-xl border border-sky-100 flex flex-col sm:w-3/5 bg-white sm:p-10">
                        <div className="shadow-2xl p-3 rounded-xl flex flex-row sm:mr-4 mb-10 mt-10 mx-2 items-center">
                            <div className="avatar mr-5">
                                <div className="w-14 h-14 rounded-full">
                                    <img src="img/profile.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className='flex justify-between'>
                                    <h1 className="font-bold text-lg mb-3">
                                        Jason
                                    </h1>
                                    <p className='text-sm text-gray-400'>
                                        02.14 PM
                                    </p>
                                </div>

                                <p className="text-base">
                                    Hey jason, I can’t find the promo section. Can u tell me where is it?
                                </p>
                            </div>
                        </div>
                        <div className="shadow-2xl p-3 rounded-xl flex flex-row sm:mr-4 mb-10 mt-10 mx-2 items-center">
                            <div className="flex flex-col">
                                <div className='flex justify-between'>
                                    <p className='text-sm text-gray-400'>
                                        02.14 PM
                                    </p>
                                    <h1 className="font-bold text-lg mb-3">
                                        Han
                                    </h1>

                                </div>

                                <p className="text-base">
                                    Hey jason, I can’t find the promo section. Can u tell me where is it?
                                </p>
                            </div>
                            <div className="avatar ml-5">
                                <div className="w-14 h-14 rounded-full">
                                    <img src="img/profile.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="ml-6 mr-6 flex items-center mt-72 mb-5">
                            <input className="
                            bg-white
                            outline-none
                            border-2
                            border-[#5E50A1]
                            w-full 
                            py-2 
                            px-3 
                            focus:border-violet-900
                            shadow-sm placeholder-slate-400
                            focus:outline-none  focus:ring-1 focus:ring-[#5E50A1]
                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                            rounded-2xl"
                                type="text" placeholder="type message..." />
                            <div className="rounded-full bg-violet-900 w-8 h-8 flex items-center justify-center ml-3">
                                <img className="" src="/img/send.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChatLayout