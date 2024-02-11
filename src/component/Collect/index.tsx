import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Collect: FC<IProps> = () => {
  return <div> Collect</div>;
};

export default memo(Collect);
