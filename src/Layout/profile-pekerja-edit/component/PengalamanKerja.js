import { useEffect, useState } from "react";
import { AddExperience } from "../../../redux/action/AddExperience";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Reset } from "../../../redux/action/Reset";


const PengalamanKerja = () => {
    const { loading, data, error} = useSelector(
        (state) => state.experience
      );
      const router = useRouter()
      const dispatch = useDispatch();
      const [addData, setAddData] = useState({
        company_name: '',
        position: '',
        entry_date: '',
        date_out: '',
        description: ''
      });
      const {data:auth} = useSelector(state=>state.auth)
      const handleAdd = (e) => {
        e.preventDefault();
        dispatch(AddExperience(addData, auth.userId, auth.token));
        // tambah kondisi loading, data, error
      }
      
      useEffect(()=> {
        console.log(data, "xixi")
        if (data) {
          Swal.fire({
            icon: "success",
            text: "Data Successfully Updated",
          });
            dispatch(Reset())
            router.replace(`/profile/edit/${auth.userId}`);
        } else if (error) {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: "Please Try Again",
          });
          dispatch(Reset())
        }
      },[data, error])
    return (
    <>
      {/* pengalaman kerja */}
      <div className="bg-white mt-10 rounded-lg shadow-xl">
        <div className="border-b-2">
          <h1 className="font-bold text-2xl py-4 ml-10">Pengalaman Kerja</h1>
        </div>
        <form onSubmit={(e) => handleAdd(e)}>
        <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
          <div className="md:flex flex-row justify-between">
            <div className="md:w-1/2 md:mr-10">
              <p className="">Nama Perusahaan :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="text"
                placeholder="PT Apa aja"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        company_name: e.target.value
                    }))
                  }}
              />
            </div>
            <div className="md:w-1/2">
              <p className="">Posisi :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="text"
                placeholder="Web developer"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        position: e.target.value
                    }))
                  }}
              />
            </div>
          </div>
          <div className="md:flex flex-row justify-between mt-10">
            <div className="md:w-1/2 md:mr-10">
              <p className="">Tanggal Masuk :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="date"
                placeholder="DD-MM-YYYY"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        entry_date: e.target.value
                    }))
                  }}
              />
            </div>
            <div className="md:w-1/2">
              <p className="">Tanggal Keluar :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="date"
                placeholder="DD-MM-YYYY"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        date_out: e.target.value
                    }))
                  }}
              />
            </div>
          </div>
          <div className="mt-7 mb-7">
            <h1 className="mb-5 font-bold">Deskripsi singkat :</h1>
            <textarea
              className="focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] focus:outline-none w-full h-40 border-2 border-[#9EA0A5] rounded-md bg-white p-3"
              placeholder="Deskripsikan pekerjaan anda"
              required
                onChange={(e)=> {
                  setAddData((prevData)=>({
                        ...prevData,
                        description: e.target.value
                  }))
                  }}
            ></textarea>
          </div>
          <div className="border-y-2 mb-32">
            <button className="border-2 text-[#FBB017] text-lg font-bold border-[#FBB017] w-full p-2 my-10 rounded-sm">
              Tambah pengalaman kerja
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};
export default PengalamanKerja;
