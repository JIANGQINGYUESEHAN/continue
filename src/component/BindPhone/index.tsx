/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import BindPhoneWrapper from "./styled";
import { Form, Input } from "antd";
import NavBar from "../../view/NavBar";
import { connect } from "react-redux";
import action from "../../store/action";
import {
  BindMobilePhoneNumberCode,
  getVerificationCodeBind,
} from "../../service/static/common";
import { Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  info?: any;
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
const BindPhone: FC<IProps> = (props) => {
  const { info } = props;

  //btn显示显示的文本
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
    await getVerificationCodeBind(phoneNumber);
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
  //发送请求
  const onFinish = async (values: any) => {
    // console.log("Success:", values);
    const res = await BindMobilePhoneNumberCode(
      values.TestCode,
      values.password,
      values.username
    );
    if (res.msg == "请求成功") {
      Toast.show({
        icon: "success",
        content: "绑定手机号成功",
      });
    } else {
      Toast.show({
        icon: "fail",
        content: "已经绑定",
      });
    }

    Navigate("/user");
  };
  return (
    <BindPhoneWrapper>
      <NavBar IsShowChildren={false} middle="修改密码" />
      <div className="userInfo">
        <div className="avater">
          <div className="image">
            <div className="img">
              <img src={info!.head_portrait} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="title">
          <div className="info">
            <span className="user">账号:</span>&nbsp;
            <span className="password">{info!.nickname}</span>
          </div>
          <div className="infoA">
            <span className="userA">密码:</span>&nbsp;
            <span className="passwordA">{info!.password}</span>
          </div>
        </div>
      </div>
      <div className="Content">
        <Form
          name="basic"
          requiredMark={false}
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
              style={{
                width: "300px",
                height: " 50px",
                backgroundColor: "rgb(246, 248, 255)",
              }}
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
    </BindPhoneWrapper>
  );
};

const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;
export default connect(mapStateToProps, mapDispatchToProps)(memo(BindPhone));
