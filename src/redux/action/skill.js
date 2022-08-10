import axios from "axios"

const GetSkillRequest = () => {
    return {
        type: "GET_SKILL_REQUEST"
    }
}

const GetSkillSucces = (data) => {
    return {
        type: "GET_SKILL_SUCCESS",
        payload: data
    }
}

const GetSkillError = (error) => {
    return {
        type: "GET_SKILL_ERROR",
        payload: error
    }
}

export const GetSkill = (id) => {
    return (dispatch) => {
    dispatch(GetSkillRequest())
        axios({
            method: "GET",
            url: `https://coral-app-3yjfb.ondigitalocean.app/api/v1/skill/${id}`
        })
        .then ((res) => {
            dispatch (GetSkillSucces(res.data))
            console.log(res.data, "cek isi data Skill")
        })
        .catch((err)=> {
            dispatch(GetSkillError(err.response))
        })
    }
}
