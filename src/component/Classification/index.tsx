import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import ClassificationWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const Classification: FC<IProps> = () => {
  return <ClassificationWrapper></ClassificationWrapper>;
};

export default memo(Classification);
