import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const AppDownload: FC<IProps> = () => {
  return <div> AppDownload</div>;
};

export default memo(AppDownload);
