import { Link, NavLink, useNavigate } from "react-router-dom"
// import "../layout/header.css"
import { AliwangwangOutlined, AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { Children, use, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { LogOutAPI } from "../../services/api.services";
const HeaderPage = () => {
    const [current, setCurrent] = useState('mail');
    const { user, setUser } = useContext(AuthContext);
    const nav = useNavigate()
    const onClick = e => {
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await LogOutAPI()
        if (res.data) {
            localStorage.removeItem("access_token")
            setUser({
                id: "",
                fullName: "",
                email: "",
                phone: "",
                avatar: "",
                role: ""
            })
            message.success("Đăng xuất thành công")
            nav("/")

        }
    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <AppstoreOutlined />,

        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <SettingOutlined />,

        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng Nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,

        },] : [{
            label: `${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => { handleLogout() }}>Đăng xuất</span>,
                    key: 'logout',
                }
            ]
        }]),

    ]

    return (

        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    )
}
export default HeaderPage
