import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const FixPerson: FC<IProps> = () => {
  return <div> FixPassword</div>;
};

export default memo(FixPerson);
