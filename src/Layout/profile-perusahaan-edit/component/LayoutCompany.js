import DataDiri from "./DataDiri"
import ProfileCompany from "./ProfileCompany"


const LayoutCompany = ()=>{
          return(
          <>
              <main className="flex flex-col">
                    <div className="bg-[#5E50A1] md:w-auto h-96 relative">
                    </div> 
                    <div className="lg:flex lg:mx-32 px-3 absolute mt-16">
                    <ProfileCompany />
                    <DataDiri />
                    </div>
              </main> 
          </>
          )
}

export default LayoutCompany