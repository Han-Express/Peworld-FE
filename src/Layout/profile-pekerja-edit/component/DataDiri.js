import { useEffect, useState } from "react";
import { UpdateEmployee } from "../../../redux/action/UpdateEmployee";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const DataDiri = ({employees}) => {
  const { loading, employee, error} = useSelector(
    (state) => state.employee
  );
  const router = useRouter()
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({
    job: employees[0].job,
    job_status: employees[0].job_status,
    domicile: employees[0].domicile,
    instagram: employees[0].instagram,
    github: employees[0].github,
    gitlab: employees[0].gitlab,
    email: employees[0].email,
    name: employees[0].name,
    description: employees[0].description,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateEmployee(updateData));
    // tambah kondisi loading, data, error
    
  }
  useEffect(()=> {
    console.log(employee, "xixi")
    if (employee) {
      Swal.fire({
        icon: "success",
        text: "Data Successfully Updated",
      });
        router.replace("/profile/edit");
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Please Try Again",
      });
    }
  },[employee, error])
  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl">
        <div className="border-b-2">
          <h1 className="font-bold text-2xl py-4 ml-10">Data diri</h1>
        </div>
        <form onSubmit={(e) => handleUpdate(e)}>
          <div className="flex flex-col mx-10 m-3 text-[#9EA0A5]">
            <div className="mt-5">
              <div className="flex flex-col">
                <p className="mb-3 font-bold text-base">Name Lengkap :</p>
                <input
                  className=" text-black border-b-2 mt-3 block  w-full  px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                  type="text"
                  placeholder="Masukan nama lengkap"
                  value={updateData.name}
                  required
                  onChange={(e)=> {
                    setUpdateData((prevData)=>({
                        ...prevData,
                        name: e.target.value
                    }))
                  }}
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col">
                <p className="mb-3 font-bold text-base">Job :</p>
                <input
                  className=" text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none "
                  type="text"
                  placeholder="Masukkan job"
                  value={updateData.job}
                  required
                  onChange={(e)=> {
                    setUpdateData((prevData)=>({
                        ...prevData,
                        job: e.target.value
                    }))
                  }}
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col">
                <p className="mb-3 font-bold text-base">Job status :</p>
                <input
                  className=" text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none "
                  type="text"
                  placeholder="Masukkan job status"
                  required
                  value={updateData.job_status}
                  onChange={(e)=> {
                    setUpdateData((prevData)=>({
                        ...prevData,
                        job_status: e.target.value
                    }))
                  }}
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col">
                <p className="mb-3 font-bold text-base">Domisili :</p>
                <input
                  className=" text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                  type="text"
                  placeholder="Masukkan domisili"
                  required
                  value={updateData.domicile}
                  onChange={(e)=> {
                    setUpdateData((prevData)=>({
                        ...prevData,
                        domicile: e.target.value
                    }))
                  }}
                />
              </div>
            </div>
            <div className="">
              <div className="lg:flex justify-between mt-7">
                <div className="flex flex-col md:mr-5">
                  <h1 className="mb-2 mt-2">Instagram :</h1>
                  <input
                    className="placeholder:text-[12px] text-sm px-2 py-2 rounded-md bg-white text-black border border-[#9EA0A5] focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none"
                    placeholder="Masukkan username IG"
                    type="text"
                    required
                    value={updateData.instagram}
                    onChange={(e)=> {
                        setUpdateData((prevData)=>({
                            ...prevData,
                            instagram: e.target.value
                        }))
                      }}
                  />
                </div>
                <div className="flex flex-col md:mr-5">
                  <h1 className="mb-2 mt-2">Github :</h1>
                  <input
                    className="placeholder:text-[12px] text-sm px-2 py-2 rounded-md bg-white text-black border   border-[#9EA0A5] focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none"
                    placeholder="Masukkan username Github"
                    type="text"
                    value={updateData.github}
                    required
                    onChange={(e)=> {
                        setUpdateData((prevData)=>({
                            ...prevData,
                            github: e.target.value
                        }))
                      }}
                  />
                </div>
                <div className="flex flex-col md:mr-5">
                  <h1 className="mb-2 mt-2">Gitlab :</h1>
                  <input
                    className="placeholder:text-[12px] text-sm px-2 py-2 rounded-md bg-white text-black border border-[#9EA0A5] focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none "
                    placeholder="Masukkan username Gitlab"
                    type="text"
                    value={updateData.gitlab}
                    onChange={(e)=> {
                        setUpdateData((prevData)=>({
                            ...prevData,
                            gitlab: e.target.value
                        }))
                      }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-7">
              <h1 className="mb-5 font-bold">Deskripsi singkat :</h1>
              <textarea
                className="focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none w-full h-48 border-2 border-[#9EA0A5] rounded-md bg-white p-3"
                placeholder="Tuliskan deskrispi singkat"
                value={updateData.description}
                onChange={(e)=> {
                    setUpdateData((prevData)=>({
                        ...prevData,
                        description: e.target.value
                    }))
                  }}
              ></textarea>
              <div className="flex justify-end mt-2">
                <button className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold mb-5 mt-2">Simpan</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DataDiri;
