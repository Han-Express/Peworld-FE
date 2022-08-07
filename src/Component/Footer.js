import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-violet-700 text-white pb-8 text-base">
        <div className="px-28 py-12 w-6/12">
          <img className="w-[135px] mb-8" src="/img/logoPeworld.svg"/>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <hr className="w-10/12 mx-auto mt-5"/>
        <div className="px-28 -ml-1 mt-10 ">
            <div className="flex justify-start">
              <p>2020 Pewworld. All right reserved</p> 
            </div>
          <div className="flex flex-row justify-end -mt-6">
            <p>Phone</p>
            <p className="ml-12">Email</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer