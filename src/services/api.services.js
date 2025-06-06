import axios from "./axios.customize"
const createUser = (fullName, email, password, phone) => {
    const URL_Backend = "/api/v1/user"
    const data = {
        fullName, email, password, phone
    }
    return axios.post(URL_Backend, data)
}
const getAllUserAPI = () => {
    const URL_Backend = "/api/v1/user"
    return axios.get(URL_Backend)
}
export {
    createUser,
    getAllUserAPI
}