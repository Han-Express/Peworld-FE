import React from 'react'
import CompanyProfile from '../../../Layout/Profile-Perusahaan'



export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/v1/companies/15')
  const data = await res.json()
  console.log(data.data, "awowkwk")
  return {
    props: {
      companies: data.data
    }
  }
}


const company = ({companies}) => {
  return (
    <>
    <CompanyProfile companies={companies}/>
    </>
  )
}

export default company

