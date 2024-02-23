import { memo } from "react";
import type { FC, ReactNode } from "react";
import SkeletonItemWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const SkeletonItem: FC<IProps> = () => {
  return <SkeletonItemWrapper> </SkeletonItemWrapper>;
};

export default memo(SkeletonItem);
