import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";

interface IProps {
  children?: ReactNode;
}

const NovelAndComicDetails: FC<IProps> = () => {
  return (
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
      <div className="card-container">
        <div className="left">
          {/* <div className="image">
            <img
              src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
              alt="漫画封面"
            />
          </div> */}
        </div>
        <div className="right">
          <div className="topName">
            到南满哈哈哈哈 到南满哈哈哈哈到南满哈哈哈哈
          </div>
          <div className="author">
            <span> 作者：</span>
            <span> 哈哈哈哈哈哈哈哈</span>
          </div>
          <div className="time">
            <span> 上线时间：</span>
            <span> 2023-06-23</span>
          </div>
          <div className="Label">
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>{" "}
            <div className="LabelItem">
              <span>都市</span>
            </div>
          </div>
          <div className="Item">
            <div className="Icon">
              <div className="icon">
                <SvgIcon name="eyes" size={14} />
              </div>
            </div>
            <div className="Icon">
              <div className="icon">
                <SvgIcon name="eyes" size={14} />
              </div>
            </div>
            <div className="Icon">
              <div className="icon">
                <SvgIcon name="eyes" size={14} />
              </div>
            </div>
            <div className="Love"></div>
          </div>
        </div>
      </div>
    </NovelAndComicDetailsWrapper>
  );
};

export default memo(NovelAndComicDetails);
