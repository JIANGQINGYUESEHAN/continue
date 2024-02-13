/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import FixPasswordWrapper from "./styled";

import { Form, Input } from "antd";
import NavBar from "../../view/NavBar";

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
const FixPassword: FC<IProps> = () => {
  return (
    <FixPasswordWrapper>
      <NavBar IsShowChildren={false} middle="修改密码" />
      <div className="userInfo">
        <div className="avater">
          <div className="image">
            <div className="img">
              <img
                src="	https://www.cooer.cc/uploads/arctimg/20230418/1681794794781..jpg"
                alt=""
                className="img"
              />
            </div>
          </div>
        </div>
        <div className="title">
          <div className="info">
            <span className="user">账号:</span>&nbsp;
            <span className="password">ssss</span>
          </div>
          <div className="infoA">
            <span className="userA">密码:</span>&nbsp;
            <span className="passwordA">sssss</span>
          </div>
        </div>
      </div>
      <div className="Content">
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input size="large" style={{ width: "300px", height: " 50px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              style={{ width: "300px", height: " 50px" }}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="Submit">
        <span>修改密码</span>
      </div>
    </FixPasswordWrapper>
  );
};

export default memo(FixPassword);
