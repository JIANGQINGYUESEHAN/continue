import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Classification: FC<IProps> = () => {
  return <div> Classification</div>;
};

export default memo(Classification);
