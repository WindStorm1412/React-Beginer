import { data } from "react-router-dom"
import axios from "./axios.customize"
const createUser = (fullName, email, password, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        fullName, email, password, phone
    }
    return axios.post(URL_Backend, data)
}
const updateUserAPI = (_id, fullName, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        _id,
        fullName,
        phone
    }
    return axios.put(URL_Backend, data)
}
const getAllUserAPI = (current, pageSize) => {
    const URL_Backend = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_Backend)
}
const deleteUserAPI = (_id) => {
    const URL_Backend = `/api/v1/user/${_id}`

    return axios.delete(URL_Backend)
}
const handleUploadFile = (file, folder) => {
    const URL_Backend = "/api/v1/file/upload"
    let configs = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const data = new FormData()
    data.append("fileImg", file)
    return axios.post(URL_Backend, data, configs)

}
const UpdateUserAvatar = (avatar, _id, fullName, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        avatar,
        _id,
        fullName,
        phone

    }
    return axios.put(URL_Backend, data)
}
const RegisterAPI = (fullName, email, password, phone) => {
    const URL_Backend = "/api/v1/user/register"
    const data = {
        fullName, email, password, phone
    }
    return axios.post(URL_Backend, data)
}
const LoginAPI = (username, password) => {
    const URL_Backend = "/api/v1/auth/login"
    const data = {
        username, password

    }
    return axios.post(URL_Backend, data)
}
const getAccountAPI = () => {
    const URL_Backend = "/api/v1/auth/account"

    return axios.get(URL_Backend)
}
export {
    createUser,
    updateUserAPI,
    getAllUserAPI,
    deleteUserAPI,
    handleUploadFile,
    UpdateUserAvatar,
    RegisterAPI,
    LoginAPI,
    getAccountAPI
}