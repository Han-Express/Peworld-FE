import DataDiri from "./DataDiri";
import Edit from "./Edit";
import PengalamanKerja from "./PengalamanKerja";
import Portofolio from "./Portofolio";
import Skill from "./Skill";



const LayoutPekerja = ({employees, skill}) => {
  return (
    <>
      <main className="flex flex-col">
        <div className="bg-[#5E50A1] md:w-auto h-96"></div>
        <div className="lg:flex lg:mx-32 px-3 -mt-72">
          <Edit employees={employees}/>
          <div className="md:w-2/3 h-full flex flex-col mb-14">
            <DataDiri employees={employees} />
            <Skill skill={skill}/>
            <PengalamanKerja/>
            <Portofolio />
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutPekerja;
