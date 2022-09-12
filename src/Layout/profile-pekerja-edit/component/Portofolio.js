import { useCallback, useEffect, useRef, useState } from "react";
import { AddPortfolio } from "../../../redux/action/AddPortfolio";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useDropzone } from "react-dropzone";
import { Reset } from "../../../redux/action/Reset";


const Portofolio = () => {
    const { loading, data, error} = useSelector(
        (state) => state.portfolio
      );
      const router = useRouter()
      const dispatch = useDispatch();
      const formData = new FormData();
      const [addData, setAddData] = useState({
        name: '',
        link: '',
        image: null,
      });
      const [imgPreview, setImgPreview] = useState(null)
      const {data:auth} = useSelector(state=>state.auth)
      const imageRef = useRef()

      formData.append("name", addData.name);
      formData.append("link", addData.link);
      formData.append("image", addData.image);
      formData.append('user_id', auth.userId)
      const handleAdd = (e) => {
        e.preventDefault();
        dispatch(AddPortfolio(formData, auth.token));
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
        } else if (error) {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: "Please Try Again",
          });
        }
      },[data, error])
      console.log(addData)

      const onDrop =  useCallback((files) => {
        console.log(files, 'process')
        setAddData((prev) =>{ 
          return {...prev, image: files[0]}}
        )
        files.forEach((file) => {
          const readFiles = new FileReader()
        readFiles.onabort = () => alert('upload cancelled')
        readFiles.onerror = () => alert('upload error')
        readFiles.onload = () => {
          const imgUrl = readFiles.result
          console.log(imgUrl, 'success')
          setImgPreview(imgUrl)
        }
        readFiles.readAsDataURL(file)
        })
        
        
      }, [])

      const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <>
      {/* portofolio */}
      <div className="bg-white mt-10 rounded-lg shadow-xl">
        <div className="border-b-2">
          <h1 className="font-bold text-2xl py-4 ml-10">Portofolio</h1>
        </div>
        <form encType="multipart/form-data" onSubmit={(e) => handleAdd(e)}>
        <div className="flex flex-col mx-10 m-3 text-[#9EA0A5] mt-10">
            <div className="flex flex-col">
            <div className="w-full mr-10">
              <p className="">Nama Aplikasi :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="text"
                placeholder="Masukkan nama aplikasi"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        name: e.target.value
                    }))
                  }}
              />
            </div>
            <div className="w-full mt-7">
              <p className="">Link Repository :</p>
              <input
                className="text-black border-b-2 mt-3 block w-full px-2 py-2 bg-white border-[#9EA0A5] rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#5E50A1] focus:ring-1 focus:ring-[#5E50A1] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none"
                type="text"
                placeholder="Masukkan link repository"
                required
                  onChange={(e)=> {
                    setAddData((prevData)=>({
                        ...prevData,
                        link: e.target.value
                    }))
                  }}
              />
            </div>
          </div>
          <div {...getRootProps()}action="" className="flex flex-col">
            <input
            // onDragOver={(e) => {
            //   e.preventDefault()
            //   e.stopPropagation()
            // }}
            // onDrop={uploadImage}
            // ref={imageRef} 
            {...getInputProps()}
            type="file" 
            multiple 
            required
                onChange={(e)=> {
                  setAddData((prevData)=>({
                      ...prevData,
                      image: e.target.files[0]
                  }))
                }}
            />
            {imgPreview ? 
            <div className="flex-col border-8 border-dashed mt-10 py-10 border-gray-400">
              <img className="w-[400px] mx-auto" src={imgPreview} />
            </div> : 
            <div className="flex-col border-8 border-dashed mt-10 py-10 border-gray-400">
              <div className="flex justify-center">
                <img className="flex justify-center" src="/img/cloud.svg" />
              </div>
              <p className="text-center text-sm">
                Drag & Drop untuk Upload Gambar Aplikasi Mobile
              </p>
              <p className="text-center text-xs mb-5">
                Atau cari untuk mengupload file dari direktorimu.
              </p>
              <div className="md:flex flex-row justify-center mb-10 mt-10 px-10 ">
                <div className="flex mr-10 items-center mb-5">
                  <img className="w-9 mr-3" src="/img/photo.svg" />
                  <div className="flex flex-col text-xs">
                    <p className="text-xs">High-Res Image</p>
                    <p>PNG, JPG or GIF</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="w-9 mr-3" src="/img/size.svg" />
                  <div className="flex flex-col text-xs">
                    <p>Size</p>
                    <p>1080x1920 or 600x800</p>
                  </div>
                </div>
              </div>
            </div>
            }
            {/* <input className="w-full h-96 border-4 border-dashed bg-white border-gray-400 relative" type="file" /> */}
            
            {/* </input> */}
          </div>
          <div className="border-y-2 mt-10 mb-32">
            <button className="border-2 text-[#FBB017] text-lg font-bold border-[#FBB017] w-full p-2 my-10 rounded-sm "
            onClick={(e) => handleAdd(e)}
            >
              Tambah portofolio
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Portofolio;
