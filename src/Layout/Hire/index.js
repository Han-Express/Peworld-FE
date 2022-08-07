import Layout from "../../Component/Layout"



const HirePage = () => {
  return(
    <>
    <Layout>
    <div>
    <div className="bg-slate-100 pb-16">
      <div className="bg-violet-700 h-80 md:w-full mx-auto rounded-xl w-11/12"></div>
        <div className="my-5 flex-row md:flex md:w-4/6 w-11/12 mx-auto -mt-64">
          <div className="bg-white md:w-4/6 p-6 w-full mr-10 justify-around md:rounded-xl">
            <div>
              <img className="mx-auto" src="/img/companyProfile.png"/>
            </div>
              <h1 className="mt-5 text-lg font-semibold">Louis Tomlison</h1>
            <div className="text-sm my-4">
              <p>Web Developer</p>
              <p className="text-slate-600 mt-2">Freelancer</p>
            </div>
            <div className="text-sm text-slate-600 mt-3 leading-6">
              <p>Purwokerto, Jawa Tengah</p>
              <p>0812-3456-789</p>
            </div>
            <div className="text-sm text-slate-600 mt-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <button className="bg-violet-700 hover:opacity-90 transition p-2 my-6 rounded-md w-full text-white font-semibold">Hire</button>
            <div>
              <div className="text-lg font-semibold">
                <p>Skill</p>
              </div>
              <div className="flex flex-wrap">
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Phyton</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Laravel</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Golang</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Javascript</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">PHP</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">HTML</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">C++</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Kotlin</p>
                <p className="text-xs py-2 px-5 mr-4 mt-3 rounded-xl text-white font-semibold bg-[#FBB017]/60 border-2 border-yellow-700">Swift</p>
              </div>
            </div>
          </div>
        <div className="flex flex-col bg-white rounded-xl p-5 w-full h-[80vh] md:mt-0 mt-10">
          <div className="p-1">
            <h1 className="text-2xl font-semibold mb-4">Hubungi Lous Tomlinson</h1>
            <p className="text-sm font-normal mb-8 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className="flex flex-col text-sm">
              <form action="#">
                <label className="text-slate-600" for="category">Tujuan tentang pesan ini : </label>
                <br/>
                <select name="category" for="category" className="flex flex-col mb-3 w-full p-2 mt-3 bg-white border-[1px] rounded-md focus:border-violet-700" >
                  <option value="web">Project</option>
                  <option value="marketing">Example</option>
                  <option value="design">Example</option>
                </select>
                <label className="text-slate-600" for="comment">Pesan :</label>
                <textarea className="w-full border-[1px] rounded-md h-4/6 border-violet-700 p-2 mt-3" name="comment" placeholder="tinggalkan pesan disini"></textarea>
                <br/>
                <input className=" bg-violet-700 px-2 py-1 w-full mx-auto mt-4 rounded-lg hover:cursor-pointer text-white" type="submit" value="Kirim" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Layout>
    </>
  )
}

export default HirePage