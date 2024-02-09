import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import NovelsAndComicsItemWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const NovelsAndComicsItem: FC<IProps> = () => {
  return (
    <NovelsAndComicsItemWrapper>
      <div className="product-item">
        <div className="product-image">
          <img
            src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
            alt=""
            className="image"
          />
        </div>

        <div className="name">
          <span> </span>
        </div>
      </div>
    </NovelsAndComicsItemWrapper>
  );
};

export default memo(NovelsAndComicsItem);
