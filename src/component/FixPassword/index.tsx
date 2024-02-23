/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import type { FC, ReactNode } from "react";
import FixPasswordWrapper from "./styled";

import { Form, Input } from "antd";
import NavBar from "../../view/NavBar";
import { connect, useDispatch } from "react-redux";
import action from "../../store/action";
import { Toast } from "antd-mobile";
import { changePassword } from "../../service/static/common";
import { useNavigate } from "react-router-dom";
import BaseAction from "../../store/action/BaseAction";

interface IProps {
  children?: ReactNode;
  info?: any;
}

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  newPassword?: string;
  oldPassword?: string;
  remember?: string;
};
const FixPassword: FC<IProps> = (props) => {
  const { info } = props;
  // console.log(info);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const onFinish = async (values: any) => {
    // console.log("Success:", values);
    if (values.oldPassword == values.newPassword) {
      return Toast.show({
        icon: "fail",
        content: "两次密码不能相同",
      });
    }
    const res = await changePassword(values.newPassword, values.oldPassword);

    // console.log(res);
    if (res.msg == "请求成功") {
      Toast.show({
        icon: "success",
        content: "修改成功",
      });
      const rea = await BaseAction.queryUserInfoAsyncAction();
      Dispatch(rea);
      Navigate("/user");
    }
  };
  return (
    <FixPasswordWrapper>
      <NavBar IsShowChildren={false} middle="修改密码" />
      <div className="userInfo">
        <div className="avater">
          <div className="image">
            <div className="img">
              <img src={info?.head_portrait} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="title">
          <div className="info">
            <span className="user">账号:</span>&nbsp;
            <span className="password">{info?.uid}</span>
          </div>
          {info.user_status == 1 && (
            <div className="infoA">
              <span className="userA">密码:</span>&nbsp;
              <span className="passwordA">{info.password}</span>
            </div>
          )}
        </div>
      </div>
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
            label="旧密码"
            name="oldPassword"
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
            <Input size="large" style={{ width: "300px", height: " 50px" }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="新密码"
            name="newPassword"
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
    </FixPasswordWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;
export default connect(mapStateToProps, mapDispatchToProps)(memo(FixPassword));
