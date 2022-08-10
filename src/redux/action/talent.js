import axios from "axios"

const GetTalentRequest = () => {
    return {
        type: "GET_TALENT_REQUEST"
    }
}

const GetTalentSucces = (data) => {
    return {
        type: "GET_TALENT_SUCCESS",
        payload: data
    }
}

const GetTalentError = (error) => {
    return {
        type: "GET_TALENT_ERROR",
        payload: error
    }
}

export const GetTalent = (params, skill) => {
    const {page, limit, job_status} = params
    console.log(skill, 'cek skilll')
    console.log(page, 'cek pageeessss')

    return (dispatch) => {
    dispatch(GetTalentRequest())
        axios({
            method: "GET",
            url: `https://coral-app-3yjfb.ondigitalocean.app/api/v1/employees?skill=${skill}${page ? `&page=${page}`:``}${limit? `&limit=${limit}`:``}${job_status? `&job_status=${job_status}`:``}`
            // `http://localhost:3003/api/v1/movie/?${page ? `page=${page}`:``}${limit? `&limit=${limit}`:``}${title? `&title=${title}`:``}`,
        })
        .then ((res) => {
            dispatch (GetTalentSucces(res.data))
            console.log(res.data, "cek isi data talent")
        })
        .catch((err)=> {
            dispatch(GetTalentError(err.response))
        })
    }
}