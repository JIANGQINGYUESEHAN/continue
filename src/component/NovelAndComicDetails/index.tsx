import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";

interface IProps {
  children?: ReactNode;
}

const NovelAndComicDetails: FC<IProps> = () => {
  const [isDetail, SetisDetail] = useState(1);
  function ClicikType(index: number) {
    SetisDetail(index);
  }
  return (
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
      <div className="card-container">
        <div className="left">
          <div className="image">
            <img
              src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
              alt="漫画封面"
              className="img"
            />
          </div>
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
              <SvgIcon name="eyes" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Icon">
              <SvgIcon name="dianzanIcon" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Icon">
              <SvgIcon name="love" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Detail">
              <SvgIcon name="dianzan" size={100} />
            </div>
          </div>
        </div>
      </div>

      <div className="DetailTitle">
        <div className="Select">
          {isDetail == 1 ? (
            <div className="common">
              <div className="ContentIcon">
                <SvgIcon name="start" size={60} />
              </div>
              <div className="ContentIconPath">
                <SvgIcon name="path" size={60} color="red" />
              </div>
              <div className="ContentTitle">
                <span className="Comics">目录</span>
              </div>
            </div>
          ) : (
            <div className="common" onClick={() => ClicikType(1)}>
              <span className="Comics">目录</span>
            </div>
          )}

          {isDetail == 2 ? (
            <div className="common">
              <div className="ContentIcon">
                <SvgIcon name="start" size={60} />
              </div>
              <div className="ContentIconPath">
                <SvgIcon name="path" size={60} color="red" />
              </div>
              <div className="ContentTitle">
                <span className="Comics">详情</span>
              </div>
            </div>
          ) : (
            <div className="common" onClick={() => ClicikType(2)}>
              <span className="Comics">详情</span>
            </div>
          )}
        </div>
        <div className="Content"></div>
      </div>
    </NovelAndComicDetailsWrapper>
  );
};

export default memo(NovelAndComicDetails);
