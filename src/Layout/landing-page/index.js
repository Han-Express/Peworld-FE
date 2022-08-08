// import NavbarLogin from "../../../components/NavbarLogin"

const LandingPageLayout = () => {
    return (
        <>
            {/* <NavbarLogin /> */}
            <div className="flex flex-row mx-32 items-center">
                <div className="flex flex-col w-1/2 ">
                    <div className="w-4/5 my-20 ">
                        <h1 className="text-5xl font-bold mt-10 mb-5 leading-relaxed">
                            Talenta terbaik negeri untuk perubahan revolusi 4.0
                        </h1>
                        <p className="mb-10 text-lg text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                        </p>
                        <button className="p-3 bg-[#5E50A1] text-white rounded-md mt-5">
                            Mulai dari Sekarang
                        </button>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <img className="" src="/img/cowo_headset.png" />
                </div>
            </div>

            <div className="flex flex-row mx-32 mt-24">
                <div className="flex w-1/2">
                    <img className="" src="/img/cewe_nunjuk_laptop.png" />
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="w-4/5 my-4">
                        <h1 className="text-5xl font-bold mb-10 leading-relaxed">
                            Kenapa harus mencari tallent di peworld
                        </h1>
                        <div className="flex flex-row items-center">
                            <img src="/img/ceklis_kuning.svg" />
                            <p className="ml-5">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <img src="/img/ceklis_kuning.svg" />
                            <p className="ml-5">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <img src="/img/ceklis_kuning.svg" />
                            <p className="ml-5">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <img src="/img/ceklis_kuning.svg" />
                            <p className="ml-5">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row mx-32 my-5 mt-24">

                <div className="flex flex-col w-1/2">
                    <div className="w-4/5">
                        <h1 className="text-5xl font-bold mt-10 mb-10">
                            Skill Tallent
                        </h1>
                        <p className="mb-10 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                        </p>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        Java
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        Kotlin
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        PHP
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        Javascript
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col mr-48">
                                <div className="flex flex-row items-center">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        Golang
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        C++
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        Ruby
                                    </p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <img src="/img/ceklis_kuning.svg" />
                                    <p className="ml-5">
                                        10+ Bahasa lainnya
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <img className="" src="/img/women_laptop.png" />
                </div>
            </div>

            <div className="flex flex-row mx-32 items-center mt-14">

                <div className="flex flex-col w-full">
                    <div className="mb-28">
                        <h1 className="text-3xl font-bold mt-10 mb-10 leading-losoe text-center">
                            Their opinion about peworld
                        </h1>

                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full mb-5 mt-5">
                                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                                <div className="flex flex-col bg-white rounded-md shadow-2xl w-1/3 ml-5 mt-5">
                                    <div className=" flex justify-center ">
                                        <div className="avatar mt-5">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-10 mb-10">
                                        <h1 className="text-center font-bold text-lg">
                                            Harry Styles
                                        </h1>
                                        <p className="text-gray-300 text-center">
                                            Web Developer
                                        </p>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </p>

                                    </div>
                                </div>

                                <div className="flex flex-col bg-white rounded-md shadow-2xl w-1/3 ml-5 mt-5">
                                    <div className=" flex justify-center ">
                                        <div className="avatar mt-5">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-10 mb-10">
                                        <h1 className="text-center font-bold text-lg">
                                            Harry Styles
                                        </h1>
                                        <p className="text-gray-300 text-center">
                                            Web Developer
                                        </p>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </p>

                                    </div>
                                </div>


                                <div className="flex flex-col bg-white rounded-md shadow-2xl w-1/3 ml-5 mr-5 mt-5">
                                    <div className=" flex justify-center ">
                                        <div className="avatar mt-5">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-10 mb-10">
                                        <h1 className="text-center font-bold text-lg">
                                            Harry Styles
                                        </h1>
                                        <p className="text-gray-300 text-center">
                                            Web Developer
                                        </p>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                                        </p>

                                    </div>
                                </div>

                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}

                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="flex justify-between bg-[#5E50A1] mx-32 h-40 px-10 items-center mb-10">
                <div className="w-48">
                    <p className="text-3xl text-white">
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div className="">
                    <button className="text-xl text-[#5E50A1] bg-white rounded-md p-2">
                        Mulai dari Sekarang
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingPageLayout