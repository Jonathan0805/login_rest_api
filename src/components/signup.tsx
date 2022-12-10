import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from 'antd';
import 'antd/dist/antd.css';

export default function Signup() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);

        dispatch({
            type: "REGISTER",
            payload: {
                id: (new Date).getTime(),
                name, username, password
            }
        })
        alert("Registration successful");
        navigate("/login");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1>Signup</h1>
            <div>
                <Form
                    id="signup-form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Item>

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

                    {/* <Form.Item
                        label="Confirm Password"
                        rules={[{ required: true, message: 'Confirm your password: ' }]}
                    >
                        <Input.Password
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary"
                            htmlType="submit"
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Button type="primary" onClick={() => navigate("/login")}>Login</Button>
        </div>
    );
}