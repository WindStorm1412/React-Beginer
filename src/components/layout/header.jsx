import { Link, NavLink } from "react-router-dom"
// import "../layout/header.css"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useContext, useState } from "react";
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
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',

                    children: [
                        { label: <Link to={"/login"}> Login</Link>, key: 'login' },
                        { label: <Link to={"/register"}> Register</Link>, key: 'logout' },
                    ],
                },
            ]
        }
    ]

    return (

        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    )
}
export default HeaderPage
