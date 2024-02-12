import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import FixPasswordWrapper from "./styled";

import { Form, Input } from "antd-mobile";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

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
        <Form>
          <div className="old common">
            <Form.Item label="密码" name="password">
              <Input placeholder="请输入密码" />
            </Form.Item>
          </div>

          <div className="old common">
            <Form.Item label="密码" name="password">
              <Input placeholder="请输入密码" clearable type="password" />
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="Submit">
        <span>修改密码</span>
      </div>
    </FixPasswordWrapper>
  );
};

export default memo(FixPassword);
