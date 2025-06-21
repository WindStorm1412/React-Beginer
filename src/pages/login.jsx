import { Button, Col, Divider, Form, Input, notification, Row } from "antd"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../services/api.services";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm();
    const nagivate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            form.submit();
        }
    }

    const handleLogin = async (values) => {
        const res = await LoginAPI(values.email, values.password)
        setLoading(true);
        if (res.data) {
            // Handle successful login, e.g., redirect to dashboard
            notification.success({
                message: "Login Successful",
                description: "Welcome back!",
            })
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);

            nagivate("/users");
        } else {
            notification.error({
                message: "Login Failed",
                description: "Invalid email or password.",
            })
        }
        setLoading(false);
    }
    return (
        <>
            <div style={{ border: "1px solid #ccc", margin: "auto", padding: "10px", borderRadius: "8px", maxWidth: "400px", marginTop: "60px" }}>
                <Form
                    layout="vertical"
                    style={{ gap: "10px", marginTop: "50px" }}
                    form={form}
                    onFinish={(values) => { handleLogin(values) }}
                >
                    <Row justify={"center"}>
                        <Col xs={24} md={14}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={14}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input.Password onKeyDown={(e) => { handleKeyDown(e) }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Button
                                type="primary"
                                onClick={() => { form.submit() }}
                                loading={loading}
                            >
                                Login
                            </Button>
                            <Link to={"/"} >Go to Home Page <ArrowRightOutlined /> </Link>
                        </div>
                    </Form.Item>
                </Form>
                <Divider />

                <div justify={"space-between"} >
                    <div>
                        Chưa có tài khoản?
                        <Link to={"/register"}>Đăng ký ngay</Link>
                    </div>



                </div>

            </div >
        </>
    )
}

export default LoginPage

