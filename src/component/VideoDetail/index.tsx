/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VideoDetailWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import VideoItem from "../../view/VideoItem";

interface IProps {
  children?: ReactNode;
}

const VideoDetail: FC<IProps> = () => {
  const SwiperArray: any = [
    "全部",
    "玩具",
    "衣服",
    "图书",
    "家居",
    "鞋帽",
    "食品",
    "电器",
    "美妆",
    "户外",
  ];
  return (
    <VideoDetailWrapper>
      <NavBar IsShowChildren={false} middle="视频" />
      <div className="videoItem">
        <div className="videoContent">
          <div className="videoImag">
            <img
              src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
              alt=""
              className="img"
            />
          </div>
        </div>
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
        <div className="content">
          <div className="type">
            <Swiper
              autoplay={false}
              slideSize={20} // 根据视觉效果调整，保证两边有间隔
              trackOffset={10} // 两边的间隔
              indicator={() => null}
              className="ul"
            >
              {SwiperArray.map((item: any, index: number) => {
                return (
                  <Swiper.Item key={index}>
                    <li className={`list ${index === 0 ? "active" : ""}`}>
                      <div className="vip">
                        <SvgIcon name="VIPDetail" size={24} />
                      </div>
                      <span className="title">{index}</span>
                    </li>
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </div>
        </div>
        <NavBar left="更多" />
        <div className="ContentA">
          <VideoItem />
          <VideoItem />
        </div>
      </div>
    </VideoDetailWrapper>
  );
};

export default memo(VideoDetail);
