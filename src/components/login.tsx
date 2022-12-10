import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from 'antd';
import 'antd/dist/antd.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // @ts-ignore
    const users = useSelector(state => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);

        const payload = users.find(user => user.username === username && user.password === password)

        if (payload) {
            dispatch({
                type: "LOGIN",
                payload
            })
            alert("Login successful");
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <Form
                    id="login-form"
                    name="login-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary"
                            htmlType="submit"
                        >
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Button type="primary"
                onClick={() => navigate("/signup")}
            >
                Register
            </Button>

        </div>
    );
}