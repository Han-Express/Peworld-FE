import { useEffect, useState } from "react";
import { AddSkill } from "../../../redux/action/AddSkill";
import { DeleteSkill } from "../../../redux/action/DeleteSkill";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {GetSkill} from '../../../redux/action/skill'


const Skill = ({}) => {
  const { loading, data, error} = useSelector(
    (state) => state.skill
  );
  const {data:auth} = useSelector(state=>state.auth)
  const [refetch, setRefetch] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch();
  const [addData, setAddData] = useState({
    
    skill: ''
  });
  const handleAdd = (e) => {
    e.preventDefault();
    setRefetch(!refetch);
    dispatch(AddSkill(addData, auth.userId, auth.token));
   
    // tambah kondisi loading, data, error
  }
 
  const handleDelete = (skill) => {
    setRefetch(!refetch);
    dispatch(DeleteSkill({skill: skill}, auth.userId, auth.token));
    
    console.log(skill, "testes")
    // tambah kondisi loading, data, error
  }

  const {data:skill} = useSelector(state => state.getSkill)
  
  useEffect(()=>{
    dispatch(GetSkill(auth.userId))
  },[refetch])

  useEffect(()=> {
    
    if (data) {
      console.log(data, "test test jalan woyy")
      Swal.fire({
        icon: "success",
        text: "Data Successfully Added",
        
      });
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Please Try Again",
      });
    }
  },[data, error])

  console.log(skill)
  return (
    <>
      <div className="bg-white mt-10 rounded-lg shadow-xl">
        <div className="border-b-2">
          <h1 className="font-bold text-2xl py-4 ml-10">Skill</h1>
        </div>
        <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
          <form onSubmit={(e) => handleAdd(e)}>
          <div className="md:flex justify-between items-center">
            <input
              type="text"
              className="py-2 px-2 w-full my-2.5 bg-white border-2 md:mr-10 rounded-md shadow-sm placeholder-slate-400  focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1]"
              placeholder="Java"
              onChange={(e)=> {
                setAddData((prevData)=>({
                    ...prevData,
                    skill: e.target.value
                }))
              }}
            />
            <div className="">
              <button className="bg-[#FBB017] text-white px-5 py-2 rounded-md font-bold"> Simpan</button>
            </div>
          </div>
          </form>
          <div className="flex flex-row mt-4">
          {skill?.data?.map((item)=> {
              return (
                <>
                  <div className="flex bg-[#FBB017]/60 border-[#FBB017] border-2 p-2 w-32 justify-between rounded-md mr-5">
                    <p className="text-white font-bold">{item.skill}</p>
                      <div className="flex flex-row justify-end">
                        <button onClick={()=> handleDelete(item.skill_id)} value={item.skill}>
                          <img className="w-3" src="/img/delete.svg" />
                        </button>
                      </div>
                  </div>
                </>
              )
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
