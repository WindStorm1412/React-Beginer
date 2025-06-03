import { Button, Flex, Input, notification } from 'antd';
import "./user.css"
import { useState } from 'react';
import { createUser } from '../../services/api.services';
const UserForm = () => {
    const [fullName, setFullName] = useState("hello")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const handleClickBtn = async () => {
        const result = await createUser(fullName, email, password, phone)
      
        if (result.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
        }

        else if (result.error) {
            notification.error({
                description: JSON.stringify(result.message)
            })
        }

    }

    return (
        <>
            <div className='user-form'>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                    <div>
                        <Button
                            onClick={handleClickBtn}
                            type='primary'>Create</Button>  </div>
                </div>
            </div>


        </>)
}
export default UserForm