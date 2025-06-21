import { Link, NavLink } from "react-router-dom"
// import "../layout/header.css"
import { AliwangwangOutlined, AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, use, useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const HeaderPage = () => {
    const [current, setCurrent] = useState('mail');
    const { user } = useContext(AuthContext);
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
                    label: "Đăng xuất",
                    key: 'logout',
                }
            ]
        },]),



    ]

    return (

        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    )
}
export default HeaderPage
