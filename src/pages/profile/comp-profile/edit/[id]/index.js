// import functions from 'daisyui/src/colors/functions'
import { data } from 'autoprefixer'
import React from 'react'
import Layout from '../../../../../Component/Layout'
import ProfilePerusahaanLayout from '../../../../../Layout/profile-perusahaan-edit'

export async function getServerSideProps(context) {
  const company = await fetch(`${process.env.REACT_APP_URL_BE}api/v1/companies/${context.params.id}`)

  const dataCompany = await company.json()
  return{
    props:{
      company: dataCompany.data
    }
  }
}


const edit = ({company}) => {
  return (
    <Layout>
      <ProfilePerusahaanLayout company={company} />
    </Layout>
  )
}



export default edit