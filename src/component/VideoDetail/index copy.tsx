/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoDetailWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import { WithRouter } from "../../router";
import { connect } from "react-redux";
import action from "../../store/action";
import { GetVideoDetails } from "../../service/static/common";
import toYearMonthDay from "../../utils/time";
// import VideoItem from "../../view/VideoItem";

interface IProps {
  children?: ReactNode;
  query?: any;
  info?: any;
}

const VideoDetail: FC<IProps> = ({ query, info }) => {
  const { resource_id, isCartoon } = query;
  const [VideoDetailA, setVideoDetailA] = useState<any>({});
  //获取视频的信息
  useEffect(() => {
    (async () => {
      const res = await GetVideoDetails(resource_id);
      console.log(res);
      setVideoDetailA(res);
    })();
  }, [resource_id]);
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
            <img src={VideoDetailA.cover_url} alt="" className="img" />
          </div>
        </div>
        <div className="detail">
          <div className="top">
            <div className="imageTop">
              <div className="videoImag">
                <img src={VideoDetailA.cover_url} alt="" className="img" />
              </div>
            </div>
            <div className="detailTop">
              <div className="firstFloor">
                <div className="counters">
                  <div className="counter">
                    <span className="icon">
                      <SvgIcon name="eyes" />
                    </span>
                    <span className="number">{VideoDetailA.total_view}</span>
                  </div>
                  <div className="counter">
                    <span className="icon">
                      <SvgIcon name="dianzanIcon" />
                    </span>
                    <span className="number">{VideoDetailA.total_praise}</span>
                  </div>
                  <div className="counter">
                    <span className="icon">
                      <SvgIcon name="love" />
                    </span>
                    <span className="number">{VideoDetailA.total_collect}</span>
                  </div>
                </div>
              </div>
              <span className="titleAuthorA">
                上线时间：{toYearMonthDay(VideoDetailA.release_time)}
              </span>
              <span className="titleAuthor">作者：{VideoDetailA.author}</span>
              <span className="title">{VideoDetailA.intro}</span>
            </div>
          </div>
          <div className="middle">
            <div className="Label">
              {VideoDetailA?.labels.map((item: any, index: any) => {
                return (
                  <div className="LabelItem" key={index}>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="Collect">
              {VideoDetailA?.collect_status == 2 ? (
                <SvgIcon name="dianzan" size={100} />
              ) : (
                <SvgIcon name="love-fill" size={100} />
              )}
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
          {/* <VideoItem />
          <VideoItem /> */}
        </div>
      </div>
    </VideoDetailWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(VideoDetail)));
