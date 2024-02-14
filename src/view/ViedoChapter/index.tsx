import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VideoChapterWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import NavBar from "../NavBar";
import VideoItem from "../VideoItem";

interface IProps {
  children?: ReactNode;
}

const VideoChapter: FC<IProps> = () => {
  return (
    <VideoChapterWrapper>
      <NavBar />
      <div className="detail">
        <div className="top">
          <div className="imageTop">
            <div className="videoImag">
              <img
                src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
                alt=""
                className="img"
              />
            </div>
          </div>
          <div className="detailTop">
            <div className="firstFloor">
              <div className="counters">
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="eyes" />
                  </span>
                  <span className="number">234</span>
                </div>
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="love" />
                  </span>
                  <span className="number">128</span>
                </div>
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="love" />
                  </span>
                  <span className="number">128</span>
                </div>
              </div>
            </div>
            <span className="titleAuthor">作者：统计概览</span>
            <span className="title">统计概览 统计概览</span>
          </div>
        </div>
        <div className="middle">
          <div className="Label">
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>
          </div>
          <div className="Collect">
            <SvgIcon name="dianzan" size={100} />
          </div>
        </div>
      </div>
      <div className="ContentA">
        <VideoItem />
        <VideoItem />
      </div>
    </VideoChapterWrapper>
  );
};

export default memo(VideoChapter);
