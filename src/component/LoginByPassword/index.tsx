/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import LoginByPasswordWrapper from "./styled";
import SvgIcon from "../SvgIcon/index";
import { Form, Input } from "antd";
import {
  LoginWithAccountAndPassword,
  VerificationCodeLogin,
  getVerificationCode,
} from "../../service/static/common";
import { Toast } from "antd-mobile";
import BaseAction from "../../store/action/BaseAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface IProps {
  children?: ReactNode;
}

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  TestCode?: string;
};
const LoginByPassword: FC<IProps> = () => {
  const [IsPassword, SetIsPassword] = useState(true);

  const Navigate = useNavigate();
  const [num, setNum] = useState(60);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [btnText, setBtnText] = useState("点击发送验证码");
  const [isRunning, setIsRunning] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  useEffect(() => {
    setIsPhoneValid(/^1[3-9]\d{9}$/.test(phoneNumber));
  }, [phoneNumber]);
  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setNum((prevNum) => {
          if (prevNum <= 1) {
            clearInterval(timer);
            setBtnText("点击发送验证码");
            setIsRunning(false);
            return 60; // 重置秒数
          } else {
            return prevNum - 1; // 更新秒数
          }
        });
      }, 1000);
    }
    // 组件卸载时清理定时器
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleClick = async () => {
    if (!isPhoneValid) {
      return Toast.show({
        icon: "fail",
        content: "请输入正确的手机号",
      });
    }
    if (!isRunning) {
      setIsRunning(true); // 开始倒计时
      setBtnText(`${num}秒后重新发送`);
    }
    //发送请求
    await getVerificationCode(phoneNumber);
    Toast.show({
      icon: "success",
      content: "验证码成功",
    });
  };

  // 更新按钮文本
  useEffect(() => {
    if (isRunning) {
      setBtnText(`${num}秒后重新发送`);
    }
  }, [num, isRunning]);
  const Dispatch = useDispatch();
  const onFinish = async (values: any) => {
    // console.log("Success:", values);
    let res: any;
    if (IsPassword) {
      res = await LoginWithAccountAndPassword(values.username, values.password);

      if (res.msg == "参数错误") {
        return Toast.show({
          icon: "fail",
          content: "请检查账号和密码",
        });
      }
    } else {
      res = await VerificationCodeLogin(values.username, values.password);
      if (res.msg !== "请求成功") {
        return Toast.show({
          icon: "fail",
          content: "请检查手机号",
        });
      }
    }

    const token = res!.data.token;

    const secret = res!.data.secret;
    //先清除原有的token
    localStorage.removeItem("KpToken");
    //清除原有的secret
    localStorage.removeItem("secret");
    //存储secret
    console.log(3333333);

    localStorage.setItem("secret", secret);
    //存储token
    localStorage.setItem("KpToken", token);
    const rea = await BaseAction.queryUserInfoAsyncAction();
    Dispatch(rea);
    // Navigate("/user");
  };
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

      {IsPassword ? (
        <>
          <div className="Content">
            <Form
              requiredMark={false}
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
                label="账号"
                name="username"
                rules={[
                  { required: true, message: "请输入正确的用户账号!" },
                  ({}) => ({
                    validator(_, value) {
                      if (!value || /\d{12}/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("请输入正确的用户账号!"));
                    },
                  }),
                ]}
              >
                <Input
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="密码"
                name="password"
                rules={[
                  { required: true, message: "请输入正确的密码!" },
                  ({}) => ({
                    validator(_, value) {
                      if (!value || /^[a-zA-Z0-9]{8}$/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("请输入正确的密码"));
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  style={{ width: "300px", height: " 50px" }}
                />
              </Form.Item>
              <button className="Submit" type="submit">
                登录
              </button>
            </Form>
          </div>
        </>
      ) : (
        <>
          <div className="Content">
            <Form
              requiredMark={false}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="Form"
            >
              <Form.Item<FieldType>
                label="手机号"
                name="username"
                rules={[
                  { required: true, message: "请输入正确的手机号!" },
                  ({}) => ({
                    validator(_, value) {
                      if (!value || /^1[3-9]\d{9}$/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("请输入正确的手机号"));
                    },
                  }),
                ]}
              >
                <Input
                  size="large"
                  style={{
                    width: "300px",
                    height: " 50px",
                    backgroundColor: "rgb(246, 248, 255)",
                  }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="验证码"
                name="TestCode"
                className="Input"
                rules={[
                  { required: true, message: "请输入正确的验证码!" },
                  ({}) => ({
                    validator(_, value) {
                      if (!value || /^\d{6}$/.test(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("请输入正确的验证码!"));
                    },
                  }),
                ]}
              >
                <Input
                  size="large"
                  style={{
                    width: "300px",
                    height: "50px",
                    backgroundColor: "rgb(246, 248, 255)",
                  }}
                />
              </Form.Item>
              <button className="Submit" type="submit">
                立即绑定
              </button>
            </Form>
            <div className="SendCode" onClick={handleClick}>
              <span>{btnText}</span>
            </div>
          </div>
        </>
      )}
    </LoginByPasswordWrapper>
  );
};

export default memo(LoginByPassword);
