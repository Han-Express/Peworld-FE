import Image from 'next/image'

const Portfolio = ({portfolio}) => {
  return (
    <div className="flex flex-wrap mt-3 text-sm justify-center ">
      <div className="border-1 pr-2 pt-2 text-center">
      {portfolio.map((item)=> {
        return(
          <div className="h-[150px] overflow-hidden flex flex-col items-center">
            <img className="w-[200px] mx-auto" src={`${process.env.REACT_APP_URL_BE}static/${item.image}`} />
            <p className="">{item.link}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Portfolio;