import moment, { months } from "moment";

const PengalamanKerja = ({experience}) => {
  return (
    <div>
      <div >
        {experience.map((item)=> {
          return(
            <div className="flex flex-wrap sm:flex-nowrap m-4 justify-center">
              <div className="sm:w-1/6 self-center  my-5  mt-6">
                <img className="text-center" src="/img/suitcase.png" alt="suitcase"/>
              </div>
              <div className="sm:w-5/6">
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">{item.position}</h4>
                  <h4 className="text-lg">{item.company_name}</h4>
                </div>
                <div className="flex text-[#9EA0A5]">
                  <h4 className="text-base">{moment(item.entry_date).format("MMMM YYYY")} - {moment(item.date_out).format("MMMM YYYY")}</h4>
                  <h6 className="ml-4">
                    {Number(moment(item.date_out).diff(item.entry_date, 'month'))} Months 
                  </h6>
                </div>
                <h4 className="text-sm mt-5 text-[#9EA0A5]">{item.description}</h4>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className="flex m-4">
        <div className="my-5 w-24 mr-4 mt-6">
          <img className="" src="/img/suitcase.png" />
        </div>
        <div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Engineer</h4>
            <h4 className="text-lg">Tokopedia</h4>
          </div>
          <div className="flex text-[#9EA0A5]">
            <h4 className="text-base ">July 2019 - January 2020</h4>
            <h6 className="ml-4">6 Months</h6>
          </div>
          <h4 className="text-sm mt-5 text-[#9EA0A5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </h4>
        </div>
      </div> */}
    </div>
  );
};

export default PengalamanKerja;