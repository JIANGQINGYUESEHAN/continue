import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Set: FC<IProps> = () => {
  return <div> Set</div>;
};

export default memo(Set);
