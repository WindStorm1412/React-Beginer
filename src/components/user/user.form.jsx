import { Button, Flex, Input } from 'antd';
import "./user.css"
import { useState } from 'react';
const UserForm = () => {
    const [fullName, setFullName] = useState("hello")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleClickBtn = () => {
        alert("click me")
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
                            value={phoneNumber}
                            onChange={(event) => { setPhoneNumber(event.target.value) }}
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