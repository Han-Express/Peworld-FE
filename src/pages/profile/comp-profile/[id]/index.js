import React from 'react'
import CompanyProfile from '../../../../Layout/Profile-Perusahaan'



export async function getServerSideProps(context) {
  const res = await fetch(`https://coral-app-3yjfb.ondigitalocean.app/api/v1/companies/${context.params.id}`)
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

