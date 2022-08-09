import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-violet-700 text-white pb-8 text-base">
        <div className="md:px-28 px-10 py-12 w-full md:w-6/12 flex-col md:flex">
          <img className="w-[120px] md:w-[135px] mb-8" src="/img/logoPeworld.svg"/>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <hr className="w-10/12 mx-auto mt-5"/>
        <div className="md:px-28 px-10 mt-10 ">
            <div className="flex">
              <p>2020 Pewworld. All right reserved</p> 
            </div>
          <div className="flex flex-col md:flex-row justify-end md:-mt-6 mt-14">
            <p>Phone</p>
            <p className="md:ml-12">Email</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer