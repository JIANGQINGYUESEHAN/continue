import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const FilterCriteria: FC<IProps> = () => {
  return <div> FilterCriteria</div>;
};

export default memo(FilterCriteria);
