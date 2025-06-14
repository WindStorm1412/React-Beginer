import { Button, Form, Input, notification } from "antd"
import { RegisterAPI } from "../services/api.services";
import { useNavigate } from "react-router-dom";

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

            <div style={{ display: "flex", flexDirection: "column", margin: "50px", width: "30%", }}>
                <Form
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    layout="vertical"
                    form={form}
                >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your username!' },


                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
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
                    <div >
                        <Button
                            onClick={() => form.submit()}
                            type="primary">Register</Button>
                    </div>
                </Form>
            </div>

        </>
    )
}
export default RegisterPage