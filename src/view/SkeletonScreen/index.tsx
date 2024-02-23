import { memo } from "react";
import type { FC, ReactNode } from "react";
import SkeletonWrapper from "./styled";
import SkeletonItem from "../SkeletonItem";

interface IProps {
  children?: ReactNode;
}

const SkeletonScreen: FC<IProps> = () => {
  return (
    <SkeletonWrapper>
      <div className="skeleton-wrapper">
        <div className="skeleton-header"></div>
        <div
          style={{
            width: "100%",
            height: "180px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default memo(SkeletonScreen);
