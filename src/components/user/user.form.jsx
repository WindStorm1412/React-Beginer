import { Button, Flex, Input, notification, Modal } from 'antd';
import "./user.css"
import { useState } from 'react';
import { createUser } from '../../services/api.services';
const UserForm = (props) => {
    const [fullName, setFullName] = useState("hello")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { loadUser } = props
    const handleSubmitBtn = async () => {
        const result = await createUser(fullName, email, password, phone)

        if (result.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            ClearData()
            await loadUser()
        }

        else if (result.error) {
            notification.error({
                description: JSON.stringify(result.message)
            })
        }

    }
    const ClearData = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <>
            <div className='user-form'>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table user</h3>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        type='primary'>Create User</Button>
                </div>

                <Modal
                    title="Create User"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={() => { handleSubmitBtn() }}
                    onCancel={() => { ClearData() }}
                    maskClosable={false}
                    okText={"Create"}
                > <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                        <div>
                            <span>Full name</span>
                            <Input
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
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
            </div>
        </>)
}
export default UserForm