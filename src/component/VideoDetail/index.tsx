/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoDetailWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Skeleton, Toast } from "antd-mobile";
import { WithRouter } from "../../router";
import { connect } from "react-redux";
import action from "../../store/action";
import {
  BuyWithSpark,
  CategoryList,
  GetDataForNextPage,
  GetVideoDetails,
  GetVideoDetailsAll,
  gethandleCollect,
} from "../../service/static/common";
import toYearMonthDay from "../../utils/time";
import { PlayOutline } from "antd-mobile-icons";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";
import VideoItem from "../../view/VideoItem";
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
  const Navigate = useNavigate();
  const [VideoEpisodeList, setVideoEpisodeList] = useState([]);
  const [DetailUrl, setDetailUrl] = useState<string>();
  const [OtherDetail, setOtherDetail] = useState<any>([]);

  const [feedKey, setFeedKey] = useState("");
  const [IshandleFullScreenPlay] = useState(false);

  //获取视频的信息
  useEffect(() => {
    (async () => {
      const res = await GetVideoDetails(resource_id);

      setVideoDetailA(res);
      setVideoEpisodeList(res?.video_episode_list);
      const Category = res.category;
      const rea = await CategoryList(isCartoon, 20, 0, Category);

      setOtherDetail(rea.list);

      setFeedKey(res.feed_key);
      flushSync;
      if (VideoDetailA !== "") {
        setHasData(true);
      }
    })();
  }, [resource_id]);
  //切换下一页
  async function ClickFeedKey() {
    const res = await GetDataForNextPage(isCartoon!, 20, 0, feedKey);
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setOtherDetail(res.list);
  }
  //点击任意视频播放
  async function ClickIndex(index: number) {
    // console.log(index);
    //获取用户的详情
    const Isvip = info.is_vip;

    const sparkCountAll = info.spark_balance;

    //获取视频详情
    const accessType = VideoDetailA.video_episode_list[index].access_type;
    const resourceId = VideoDetailA.resource_id;
    const episodeId = VideoDetailA.video_episode_list[index].episode_id;
    const sparkCount = VideoDetailA.video_episode_list[index].spark_count;
    //不要会员就可以
    if (accessType == 1) {
      PlayDirectly(resourceId, episodeId);
    }
    //会员
    if (accessType == 2) {
      if (Isvip == 2) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      if (Isvip == 1) {
        PlayDirectly(resourceId, episodeId);
      }
    }
    // //火花
    if (accessType == 3) {
      //不是会员火花不够
      if (Isvip == 2 && sparkCountAll < sparkCount) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      //不是会员火花够了
      if (Isvip == 2 && sparkCountAll > sparkCount) {
        //用火花进行购买
        const rea = await BuyWithSpark(resourceId, episodeId);
        if (rea.msg == "请求成功") {
          PlayDirectly(resourceId, episodeId);
        } else {
          Toast.show({
            icon: "fail",
            content: "请重试",
          });
        }
      }

      //是会员
      if (Isvip == 1) {
        PlayDirectly(resourceId, episodeId);
      }
    }
    // console.log(VideoDetailA);

    //开始播放
    setIsPlay(true);
    setIndex(index);
  }
  useEffect(() => {
    if (IsPlay === true) {
      console.log(videoRef.current); // 此时videoRef.current不为null
      // 可以在这里进行视频播放等操作
      videoRef?.current.play();
    }
  }, [IsPlay]);
  //播放第一个视频
  async function StartPlay() {
    //获取用户的详情
    const Isvip = info.is_vip;

    const sparkCountAll = info.spark_balance;

    //获取视频详情
    const accessType = VideoDetailA.video_episode_list[0].access_type;
    const resourceId = VideoDetailA.resource_id;
    const episodeId = VideoDetailA.video_episode_list[0].episode_id;
    const sparkCount = VideoDetailA.video_episode_list[0].spark_count;
    //不要会员就可以
    if (accessType == 1) {
      PlayDirectly(resourceId, episodeId);
    }
    //会员
    if (accessType == 2) {
      if (Isvip == 2) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      if (Isvip == 1) {
        PlayDirectly(resourceId, episodeId);
      }
    }
    // //火花
    if (accessType == 3) {
      //不是会员火花不够
      if (Isvip == 2 && sparkCountAll < sparkCount) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      //不是会员火花够了
      if (Isvip == 2 && sparkCountAll > sparkCount) {
        //用火花进行购买
        const rea = await BuyWithSpark(resourceId, episodeId);
        if (rea.msg == "请求成功") {
          PlayDirectly(resourceId, episodeId);
        } else {
          Toast.show({
            icon: "fail",
            content: "请重试",
          });
        }
      }

      //是会员
      if (Isvip == 1) {
        PlayDirectly(resourceId, episodeId);
      }
    }
    // console.log(VideoDetailA);

    //开始播放
    setIsPlay(true);
  }
  //获取视频详情
  async function PlayDirectly(resourceId: any, episodeId: any) {
    const res = await GetVideoDetailsAll(resourceId, episodeId);
    // console.log(res.video_url);
    setDetailUrl(res.video_url);
  }

  async function Collect(item: any) {
    console.log(item.collect_status);
    const resourceId = item.resource_id;
    if (item.collect_status == 2) {
      //收藏

      const res = await gethandleCollect(1, resourceId);

      if (res.msg == "请求成功") {
        Toast.show({
          icon: "success",
          content: "收藏成功",
        });
      }
    } else {
      const res = await gethandleCollect(2, resourceId);
      console.log(res);

      if (res.msg == "请求成功") {
        Toast.show({
          icon: "success",
          content: "取消收藏成功",
        });
      }
    }
    //切换
    const res = await GetVideoDetails(resourceId);
    console.log(res);
    setVideoDetailA(res);
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
                  src={DetailUrl}
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
          {IshandleFullScreenPlay == false ? (
            <>
              <div className="detail">
                <div className="top">
                  <div className="imageTop">
                    <div className="videoImag">
                      <img
                        src={VideoDetailA?.cover_url}
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
                          <span className="number">
                            {VideoDetailA?.total_view}
                          </span>
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
                  <div
                    className="Collect"
                    onClick={() => Collect(VideoDetailA)}
                  >
                    {VideoDetailA?.collect_status == 2 ? (
                      <SvgIcon name="dianzan" size={100} />
                    ) : (
                      <SvgIcon name="love-fill" size={100} />
                    )}
                  </div>
                </div>
              </div>

              <div className="content">
                {VideoEpisodeList.map((item: any, index: number) => {
                  return (
                    <div
                      onClick={() => ClickIndex(index)}
                      className={`leftUl${Index === index ? " selected" : ""}`}
                      key={index}
                    >
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
                    </div>
                  );
                })}
              </div>

              <NavBar
                left="更多"
                onClickA={ClickFeedKey}
                isCartoon={isCartoon}
              />
              <div className="ContentA">
                {OtherDetail.map((item: any, index: number) => {
                  return (
                    <VideoItem key={index} item={item} isCartoon={isCartoon} />
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
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
