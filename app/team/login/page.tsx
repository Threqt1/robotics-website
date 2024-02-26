"use client"

import { LockOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, theme } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function LoginPage() {
    const { token: { borderRadius } } = theme.useToken()

    return <div className="w-1/4 bg-white p-8" style={{ borderRadius }}>
        <Space
            direction="vertical"
            size={"large"}
            className="w-full"
        >
            <div className="w-full flex justify-left">
                <p className="text-3xl font-medium">Sign in</p>
            </div>
            <Form
                name="login"
                className="w-full flex flex-col"
            >
                <FormItem
                    name="username"
                    validateTrigger="onBlur"
                    rules={[
                        {
                            required: true,
                            message: "Input a username!"
                        },
                        {
                            type: "string",
                            min: 3,
                            message: "Username must be at least 3 characters!"
                        },
                        {
                            type: "string",
                            pattern: /^[a-zA-Z0-9_.-]*$/,
                            message: "Username cannot contain special characters!"
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </FormItem>
                <FormItem
                    name="password"
                    validateTrigger="onBlur"
                    rules={[
                        {
                            required: true,
                            message: "Input a password!"
                        },
                        {
                            type: "string",
                            min: 3,
                            message: "Password must be at least 3 characters!"
                        }
                    ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button className="w-full" htmlType="submit" type="primary">
                        Log In
                    </Button>
                </FormItem>
            </Form>
        </Space>
    </div>
}