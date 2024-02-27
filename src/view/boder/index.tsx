import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import BorderWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const Border: FC<IProps> = () => {
  return <BorderWrapper> </BorderWrapper>;
};

export default memo(Border);
