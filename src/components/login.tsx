import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Input, Form } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCred, setinvalidCred] = useState(false);

    // @ts-ignore
    // const users = useSelector(state => state.users);

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const location = useLocation();

    const onFinish = (values: any) => {
        

        // const payload = users.find(user => user.username === username && user.password === password)

        // if (payload) {
        //     dispatch({
        //         type: "LOGIN",
        //         payload
        //     })
        //     alert("Login successful");
        //     navigate("/");
        // } else {
        //     alert("Invalid username or password");
        // }

        axios
            .post('http://restapi.adequateshop.com/api/authaccount/login', {
                email: username,
                password: password,
            })
            .then(function (response) {
                console.log('Success:', values);
                if (response.data.message === 'success') {
                    navigate('/home', 
                    {
                        state: {
                            name: username,
                            message: 'You have logged in succssfully',
                        },
                    }
                    );
                } else {
                    setinvalidCred(true);
                    navigate('/', {
                        state: { message: response.data.message },
                    });
                }
            });
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
            {invalidCred && <h3 style={{ color: 'red' }}>{location.state.message}</h3>}
            <Button type="primary"
                onClick={() => navigate("/signup")}
            >
                Register
            </Button>

        </div>
    );
}