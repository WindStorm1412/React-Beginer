import { Button, Col, Divider, Form, Input, notification, Row } from "antd"
import { RegisterAPI } from "../services/api.services";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        const res = await RegisterAPI(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "Register Success",
                description: "Đang ký thành công, vui lòng đăng nhập để tiếp tục",
            })
            navigate("/login");
        } else {
            notification.error({
                message: "Register Failed",
                description: res.message || "Đăng ký thất bại, vui lòng thử lại sau",
            })
        }
    };
    return (
        <>
            <Form
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                form={form}
                style={{ margin: "30px" }}

            >
                <Row justify={"center"} >
                    <Col xs={24} md={6} >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>

                    <Col xs={24} md={6}>
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
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your username!' },


                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong format!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <div >
                            <Button
                                onClick={() => form.submit()}
                                type="primary">Register</Button>
                        </div>
                        <Divider />
                        <div>Đã có tài khoản <Link to={"/login"}>Đăng nhập tại đây</Link></div>
                    </Col>
                </Row>

            </Form>




        </>
    )
}
export default RegisterPage