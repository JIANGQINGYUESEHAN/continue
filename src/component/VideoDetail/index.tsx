/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoDetailWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Skeleton, Swiper } from "antd-mobile";
import { WithRouter } from "../../router";
import { connect } from "react-redux";
import action from "../../store/action";
import { GetVideoDetails } from "../../service/static/common";
import toYearMonthDay from "../../utils/time";
import { PlayOutline } from "antd-mobile-icons";
import { flushSync } from "react-dom";
// import VideoItem from "../../view/VideoItem";

interface IProps {
  children?: ReactNode;
  query?: any;
  info?: any;
}

const VideoDetail: FC<IProps> = ({ query, info }) => {
  const { resource_id, isCartoon } = query;
  const [hasData, setHasData] = useState(false);
  const [VideoDetailA, setVideoDetailA] = useState<any>();
  const [Index, setIndex] = useState(0);
  const [IsPlay, setIsPlay] = useState(false);
  const videoRef = useRef<any>(null);
  const [VideoEpisodeList, setVideoEpisodeList] = useState([]);
  //获取视频的信息
  useEffect(() => {
    (async () => {
      const res = await GetVideoDetails(resource_id);

      setVideoDetailA(res);
      setVideoEpisodeList(res?.video_episode_list);
      // console.log(VideoDetailA.labels);
      // console.log(VideoDetailA);
      flushSync;
      if (VideoDetailA !== "") {
        setHasData(true);
      }
    })();
  }, [resource_id]);

  //点击
  async function ClickIndex(index: number) {
    setIndex(index);

    // 然后进行播放
    // //资源的所有详情
    // let accessType;
    // let sparkCount;
    // let resourceId;
    // let sectionId;
    // //判断 章节是否为数组

    // if (Array.isArray(Item.book_section_list)) {
    //   accessType = Item.book_section_list[index].access_type;
    //   sparkCount = Item.book_section_list[index].spark_count;
    //   resourceId = Item.resource_id;
    //   sectionId = Item.book_section_list[index].section_id;
    // } else {
    //   accessType = Item.access_type;
    //   sparkCount = Item.spark_count;
    //   resourceId = Item.resource_id;
    //   sectionId = Item.section_id;
    // }

    // //获取用户的详情
    // const Isvip = info.is_vip;

    // const sparkCountAll = info.spark_balance;
    // //不要会员就可以
    // if (accessType == 1) {
    //   PlayDirectly(resourceId, sectionId);
    // }
    // //会员
    // if (accessType == 2) {
    //   if (Isvip == 2) {
    //     //跳转到充值界面
    //     Navigate("/specialOffer");
    //   }
    //   if (Isvip == 1) {
    //     PlayDirectly(resourceId, sectionId);
    //   }
    // }
    // // //火花
    // if (accessType == 3) {
    //   //不是会员火花不够
    //   if (Isvip == 2 && sparkCountAll < sparkCount) {
    //     //跳转到充值界面
    //     Navigate("/specialOffer");
    //   }
    //   //不是会员火花够了
    //   if (Isvip == 2 && sparkCountAll > sparkCount) {
    //     //用火花进行购买
    //     const rea = await BuyWithSpark(resourceId, sectionId);
    //     if (rea.msg == "请求成功") {
    //       PlayDirectly(resourceId, sectionId);
    //     } else {
    //       Toast.show({
    //         icon: "fail",
    //         content: "请重试",
    //       });
    //     }
    //   }

    //   //是会员
    //   if (Isvip == 1) {
    //     PlayDirectly(resourceId, sectionId);
    //   }
    // }
  }
  useEffect(() => {
    if (IsPlay === true) {
      console.log(videoRef.current); // 此时videoRef.current不为null
      // 可以在这里进行视频播放等操作
      videoRef?.current.play();
    }
  }, [IsPlay]);
  function StartPlay() {
    setIsPlay(true);
    console.log(videoRef.current);
  }
  return (
    <VideoDetailWrapper>
      <NavBar IsShowChildren={false} middle="视频" />
      {hasData == false ? (
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Skeleton.Paragraph lineCount={15} animated />
        </div>
      ) : (
        <div className="videoItem">
          <div className="videoContent">
            {IsPlay == false && (
              <div className="Icon">
                <PlayOutline fontSize={24} onClick={StartPlay} />
              </div>
            )}
            <div className="videoImag">
              {IsPlay && (
                <video
                  className="video"
                  id="myVideo"
                  src="https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4"
                  controls
                  muted
                  ref={videoRef}
                ></video>
              )}
              {IsPlay == false && (
                <img src={VideoDetailA?.cover_url} alt="" className="img" />
              )}
            </div>
          </div>
          <div className="detail">
            <div className="top">
              <div className="imageTop">
                <div className="videoImag">
                  <img src={VideoDetailA?.cover_url} alt="" className="img" />
                </div>
              </div>
              <div className="detailTop">
                <div className="firstFloor">
                  <div className="counters">
                    <div className="counter">
                      <span className="icon">
                        <SvgIcon name="eyes" />
                      </span>
                      <span className="number">{VideoDetailA?.total_view}</span>
                    </div>
                    <div className="counter">
                      <span className="icon">
                        <SvgIcon name="dianzanIcon" />
                      </span>
                      <span className="number">
                        {VideoDetailA?.total_praise}
                      </span>
                    </div>
                    <div className="counter">
                      <span className="icon">
                        <SvgIcon name="love" />
                      </span>
                      <span className="number">
                        {VideoDetailA?.total_collect}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="titleAuthorA">
                  上线时间：{toYearMonthDay(VideoDetailA?.release_time)}
                </span>
                <span className="titleAuthor">
                  作者：{VideoDetailA?.author}
                </span>
                <span className="title">{VideoDetailA?.intro}</span>
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
                {VideoEpisodeList.map((item: any, index: number) => {
                  return (
                    <Swiper.Item key={index} onClick={() => ClickIndex(index)}>
                      <li className={`list ${Index === index ? "active" : ""}`}>
                        {item.access_type == 2 && (
                          <div className="vip">
                            <SvgIcon name="VIPDetail" size={24} />
                          </div>
                        )}
                        {item.access_type == 3 && (
                          <div className="vipA">
                            <SvgIcon name="detailNumber" size={30} />
                            <span className="a">2</span>
                          </div>
                        )}
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
      )}
    </VideoDetailWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(VideoDetail)));
