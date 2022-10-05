


const Edit = ({employees}) => {
    return (
        <>
            <div className="md:w-1/3 h-full  md:mr-8 rounded-lg bg-white ">
                <div className="md:flex flex-col md:px-1 py-1 rounded-2xl mb-5 shadow-2xl">
                    <div className="flex justify-center mt-5">
                        <div class="avatar">
                            <div class="w-36 rounded-full">
                                <img src={`${process.env.REACT_APP_URL_BE}static/${employees[0].image}`} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-5">
                        <img className="w-4 mr-3" src="/img/edit.svg" />
                        <p className="text-xl font-bold text-[#9EA0A5]">
                            EDIT
                        </p>
                    </div>
                    <div className="md:flex flex-col mx-10">
                        <h1 className="text-xl font-bold mb-5 mt-7">{employees[0].name}</h1>
                        <p className="mb-1">{employees[0].email}</p>
                        <p className="mb-1">{employees[0].job}</p>
                        <p className="mb-1 text-[#9EA0A5]">{employees[0].job_status}</p>
                        <div className="flex text-[#9EA0A5]">
                            <img className="mr-3" src="/img/location.svg" />
                            <p>{employees[0].domicile}</p>
                        </div>
                        <div className="flex flex-row text-[#9EA0A5]">
                            <img className="mr-3" src="/img/phone.svg" />
                            <p>
                                {employees[0].phone_number}
                            </p>
                        </div>
                        <p className="text-justify text-[#9EA0A5] mt-4 mb-7">{employees[0].description}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="bg-[#5E50A1] border-2 border-[#5E50A1] px-4 py-4 md:w-auto text-xl font-bold rounded-md mb-3 mt-5 text-white">
                        Ubah Password
                    </button>
                    <button className="border-[#5E50A1] border-2 px-4 py-4 md:w-auto text-xl font-bold rounded-md mb-3 mt-5 text-[#5E50A1]">
                        Kembali
                    </button>
                </div>
            </div>
        </>
    )
}

export default Edit