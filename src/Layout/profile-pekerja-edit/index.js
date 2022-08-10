import DataDiri from "./component/DataDiri";
import Edit from "./component/Edit";
import PengalamanKerja from "./component/PengalamanKerja";
import LayoutPekerja from "./component/LayoutPekerja"
import Portofolio from "./component/Portofolio";
import Skill from "./component/Skill";


const ProfilePekerjaLayout = ({employees, skill}) => {
  return (
    <>
      <LayoutPekerja employees={employees} skill={skill}/>
    </>
  );
};

export default ProfilePekerjaLayout;
