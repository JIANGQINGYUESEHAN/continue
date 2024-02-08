import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const SpecialOffer: FC<IProps> = () => {
  return <div> SpecialOffer</div>;
};

export default memo(SpecialOffer);
