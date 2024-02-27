import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import RankItemWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const RankItem: FC<IProps> = () => {
  return <RankItemWrapper> RankItem</RankItemWrapper>;
};

export default memo(RankItem);
