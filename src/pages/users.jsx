import { useEffect, useState } from "react"
import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { getAllUserAPI } from "../services/api.services"

const UsersPage = () => {
    const [dataUser, setDataUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        loadUser()
    }, [currentPage, pageSize])
    const loadUser = async () => {
        const result = await getAllUserAPI(currentPage, pageSize)
        if (result.data) {
            setDataUser(result.data.result)
            setCurrentPage(result.data.meta.current)
            setPageSize(result.data.meta.pageSize)
            setTotal(result.data.meta.total)
        }


    }

    return (
        <>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    loadUser={loadUser}
                    dataUser={dataUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    total={total}
                    setTotal={setTotal}
                />
            </div>


        </>
    )
}
export default UsersPage