import axios from "axios"

const LoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

const LoginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

export const Login = (formData) => {
    return (dispatch) => {
        dispatch(LoginRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}api/v1/auth/login`,
            data: {
                email: formData.email,
                password: formData.password
            }
        })
        .then ((res) => {
            dispatch(LoginSuccess(res.data.data))
        })
        .catch((err)=> {
            dispatch(LoginError(err.response.data))
        })
    }
}

export const Logout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}


const RegisterTalentRequest = () => {
    return {
        type: "REGISTER_TALENT_REQUEST"
    }
}

const RegisterTalentSuccess = (data) => {
    return {
        type: "REGISTER_TALENT_SUCCESS",
        payload: data
    }
}

const RegisterTalentError = (error) => {
    return {
        type: "REGISTER_TALENT_ERROR",
        payload: error
    }
}

export const RegisterTalent = (formData) => {
    return (dispatch) => {
        
        dispatch(RegisterTalentRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}api/v1/auth/register`,
            data: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone_number: formData.phone_number,
            }
        })
        .then ((res) => {
            dispatch(RegisterTalentSuccess(res.data))
            console.log(formData, 'ini data form register talent')
        })
        .catch((error)=> {
            dispatch(RegisterTalentError(error.response.data))
        })
    }
}

const RegisterCompanyRequest = () => {
    return {
        type: "REGISTER_COMPANY_REQUEST"
    }
}

const RegisterCompanySuccess = (data) => {
    return {
        type: "REGISTER_COMPANY_SUCCESS",
        payload: data
    }
}

const RegisterCompanyError = (error) => {
    return {
        type: "REGISTER_COMPANY_ERROR",
        payload: error
    }
}

export const RegisterCompany = (formData) => {
    return (dispatch) => {
        
        dispatch(RegisterCompanyRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}api/v1/auth/register/company`,
            data: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone_number: formData.phone_number,
                company_name: formData.company_name,
                sector: formData.sector,
            }
        })
        .then ((res) => {
            dispatch(RegisterCompanySuccess(res.data))
            // console.log(formData, 'lalalala')
        })
        .catch((err)=> {
            dispatch(RegisterCompanyError(err.response.data))
        })
    }
}