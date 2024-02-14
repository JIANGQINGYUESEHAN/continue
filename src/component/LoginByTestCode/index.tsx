import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const LoginByTestCode: FC<IProps> = () => {
  return <div> LoginByTestCode</div>;
};

export default memo(LoginByTestCode);
