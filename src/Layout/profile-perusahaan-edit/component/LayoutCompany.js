import DataDiri from "./DataDiri"
import ProfileCompany from "./ProfileCompany"
import { useDispatch, useSelector } from "react-redux"
import { UpdateCompany } from "../../../redux/action/UpdateCompany";
import { useEffect, useState } from "react";


const LayoutCompany = ({ company }) => {
    const dispatch = useDispatch()

    const { data } = useSelector(state => state.auth)

    const [updateData, setUpdateData] = useState({
        company_name: company[0].company_name,
        sector: company[0].sector,
        domicile: company[0].domicile,
        image: company[0].image,
        description: company[0].description,
        instagram: company[0].instagram,
        linked_in: company[0].linked_in,
        email: company[0].email,
        name: company[0].name,
        phone_number: company[0].phone_number,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateCompany(updateData, data.userId, data.token));
        // tambah kondisi loading, data, error

    }
    return (

        <>
            <main className="flex flex-col">
                <div className="bg-[#5E50A1] md:w-full h-96">
                </div>
                <form onSubmit={(e) => handleUpdate(e)}>
                    <div className="lg:flex lg:mx-32 px-3 -mt-72">
                        <ProfileCompany company={company} handleUpdate={handleUpdate} />
                        <DataDiri company={company} handleUpdate={handleUpdate} updateData={updateData} setUpdateData={setUpdateData} />
                    </div>
                </form>
            </main>
        </>
    )
}

export default LayoutCompany