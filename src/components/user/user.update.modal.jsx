import { Input, Modal, notification } from "antd"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"
import { updateUserAPI } from "../../services/api.services"

const UpdateUserModal = (props) => {
    const [id, setID] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props
    useEffect(() => {
        if (dataUpdate) {
            setID(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const result = await updateUserAPI(id, fullName, phone)

        if (result.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật thành công"
            })
            ClearData()
            loadUser()
        }

        else if (result.error) {
            notification.error({
                description: JSON.stringify(result.message)
            })
        }

    }

    const ClearData = () => {
        setIsModalUpdateOpen(false)
        setID("")
        setFullName("")
        setPhone("")
        setDataUpdate(null)
    }
    return (
        <>
            <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalUpdateOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => { ClearData() }}
                maskClosable={false}
                okText={"SAVE"}
            > <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                    <div>
                        <span>ID</span>
                        <Input
                            value={id}
                            disabled
                        />
                    </div>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>

                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal