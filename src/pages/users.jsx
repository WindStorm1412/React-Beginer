import { useEffect, useState } from "react"
import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { getAllUserAPI } from "../services/api.services"

const UsersPage = () => {
    const [dataUser, setDataUser] = useState([])
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await getAllUserAPI()
        setDataUser(result.data)

    }

    return (
        <>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable dataUser={dataUser} />
            </div>


        </>
    )
}
export default UsersPage