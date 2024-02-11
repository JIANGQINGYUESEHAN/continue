import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Info: FC<IProps> = () => {
  return <div> Info</div>;
};

export default memo(Info);
