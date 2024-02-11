import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const BindPhone: FC<IProps> = () => {
  return <div> BindPhone</div>;
};

export default memo(BindPhone);
