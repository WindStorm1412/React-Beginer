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
const getAllUserAPI = () => {
    const URL_Backend = "/api/v1/user"
    return axios.get(URL_Backend)
}
const deleteUserAPI = (_id) => {
    const URL_Backend = `/api/v1/user/${_id}`

    return axios.delete(URL_Backend)
}
export {
    createUser,
    updateUserAPI,
    getAllUserAPI,
    deleteUserAPI
}