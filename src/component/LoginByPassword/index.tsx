import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import LoginByPasswordWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const LoginByPassword: FC<IProps> = () => {
  return (
    <LoginByPasswordWrapper>
      <div className="header">
        <h1 className="welcome">欢迎登录</h1>
      </div>
      <div className="change"></div>
    </LoginByPasswordWrapper>
  );
};

export default memo(LoginByPassword);
