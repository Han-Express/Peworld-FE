import DataDiri from "./DataDiri"
import ProfileCompany from "./ProfileCompany"


const LayoutCompany = () => {
    return (
        <>
            <main className="flex flex-col">
                <div className="bg-[#5E50A1] md:w-full h-96">
                </div>
                <div className="lg:flex lg:mx-32 px-3 -mt-72">
                    <ProfileCompany />
                    <DataDiri />
                </div>

            </main>
        </>
    )
}

export default LayoutCompany