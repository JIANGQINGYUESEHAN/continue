import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

const NovelAndComicDetails: FC<IProps> = () => {
  return (
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
      <div className="card-container">
        <div className="card-image">
          <div className="image">
            <img
              src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
              alt="漫画封面"
            />
          </div>
        </div>
        <div className="card-content"></div>
      </div>
    </NovelAndComicDetailsWrapper>
  );
};

export default memo(NovelAndComicDetails);
