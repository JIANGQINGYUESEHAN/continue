/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
// import { Form, Input } from "antd";
import NavBar from "../../view/NavBar";
import FixPersonWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}
// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
// type FieldType = {
//   username?: string;
//   password?: string;
//   remember?: string;
// };
const FixPerson: FC<IProps> = () => {
  return (
    <FixPersonWrapper>
      <NavBar IsShowChildren={false} middle="修改信息" />
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
        <div className="nikename">
          <div className="left">
            <span>会员昵称</span>
          </div>
          <div className="right">
            <input type="text" className="Input" />
          </div>
        </div>
        <div className="nikenameA">
          <div className="left">
            <span>性别</span>
          </div>
          <div className="right">
            <div className="man people">
              <input type="checkbox" className="InputCheckbox" />
              <span>男</span>
            </div>
            <div className="woman people">
              <input type="checkbox" className="InputCheckbox" />
              <span>女</span>
            </div>
          </div>
        </div>
        <div className="nikename">
          <div className="left">
            <span>会员头像</span>
          </div>
          <div className="right">
            <div className="image">
              <img
                src="	https://www.cooer.cc/uploads/arctimg/20230418/1681794794781..jpg"
                alt=""
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Submit">
        <span>修改用户基本信息</span>
      </div>
    </FixPersonWrapper>
  );
};

export default memo(FixPerson);
