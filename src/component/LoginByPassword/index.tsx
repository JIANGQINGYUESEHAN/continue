/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import LoginByPasswordWrapper from "./styled";
import SvgIcon from "../SvgIcon/index";
import { Form, Input } from "antd";
interface IProps {
  children?: ReactNode;
}
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const LoginByPassword: FC<IProps> = () => {
  const [IsPassword, SetIsPassword] = useState(true);
  return (
    <LoginByPasswordWrapper>
      <div className="header">
        <h1 className="welcome">欢迎登录</h1>
      </div>
      <div className="change">
        <SvgIcon name="register" width={400} height={80} />
      </div>
      <div className="repeat">
        <div
          className="left"
          onClick={() => {
            SetIsPassword(true);
          }}
        >
          <span>账号登录</span>
          {IsPassword == true && <span className="active"></span>}
        </div>
        <div
          className="right"
          onClick={() => {
            SetIsPassword(false);
          }}
        >
          <span>手机号登录</span>
          {IsPassword == false && <span className="active"></span>}
        </div>
      </div>
      <div className="Content">
        {IsPassword ? (
          <>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 400 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="Form"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 400 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="Form"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>
            </Form>
          </>
        )}
      </div>
      <div className="Submit">
        <span>修改密码</span>
      </div>
    </LoginByPasswordWrapper>
  );
};

export default memo(LoginByPassword);
