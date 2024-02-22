/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import ShortVideoWrapper from "./styled";
import action from "../../store/action";
import { connect } from "react-redux";
import { Swiper } from "antd-mobile";
import { GetShortVideo } from "../../service/static/common";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

interface IProps {
  children?: ReactNode;
}

const ShortVideo: FC<IProps> = () => {
  const navigate = useNavigate();

  const videoRefs = useRef<any>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [Detail, setDatail] = useState<any>(() => {
    const a = {
      video_url:
        "https://xjc.demo.hongcd.com/uploads/20230214/84e165388f5bfdb1550522f50f5a57bb.mp4",
      author: "短视频1作者",
      duration: 11,
      episode_id: "9111111",
      feed_key: "2a3KYgDnJgW",
      intro: "短视频1描述",
      labels: [],
      next_status: 1,
      release_time: 1704367003,
      resource_id: "911111111111",
      title: "短视频1标题",
    };
    return [a];
  });
  const [nextstatus, setNextStatus] = useState();
  const [prevIndex, setPrevIndex] = useState(0); // 新增状态来存储前一个活动索引
  // const [ isCartoon, SetIsCarToon] = useState<number>(isCartoon!);
  //下一页标识
  const [feedKey, setFeedKey] = useState("");
  //初始化获取数据
  const [startY, setStartY] = useState(0); // 触摸开始的Y坐标
  const [endY, setEndY] = useState(0); // 触摸结束的Y坐标

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY); // 记录触摸开始的Y坐标
  };

  const handleTouchEnd = async (e: React.TouchEvent) => {
    setEndY(e.changedTouches[0].clientY); // 记录触摸结束的Y坐标
    // 判断滑动方向
    if (startY - endY > 0 && activeIndex === Detail.length - 2) {
      console.log("上滑操作，并且是倒数第二个视频");
      if (nextstatus == 1) {
        try {
          const res = await GetShortVideo(feedKey);
          if (res) {
            const updatedVideos = [...Detail, res];
            setDatail(updatedVideos);
            setFeedKey(res.feed_key);
            setNextStatus(res.next_status);
          }
        } catch (error) {
          console.error("请求新视频数据失败", error);
        }
      } else {
        cleanUpAndNavigate();
      }
    } else if (startY - endY < 0) {
      console.log("下滑操作");
      // 执行下滑后的操作
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video: any, index: number) => {
      if (index === activeIndex) {
        // 尝试播放当前活动的视频并确保不是静音
        video.muted = false; // 确保视频不是静音的
        const playPromise = video.play(); // 尝试播放视频

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // 视频播放成功
            })
            .catch((error: any) => {
              console.error("视频播放失败: ", error);
              // 处理错误，比如因为用户没有交互而不能播放
              // 可以考虑在这里显示一个播放按钮，让用户手动触发播放
            });
        }
      } else {
        // 暂停非当前活动的视频
        video.pause();
      }
    });

    // 更新前一个活动索引
    setPrevIndex(activeIndex);
  }, [activeIndex]);

  // 初始化组件时自动播放第一个视频
  useEffect(() => {
    //获取第一个视频 将他放到数组中
    (async () => {
      const rea = await GetShortVideo();
      console.log(rea);
      setFeedKey(rea.feed_key);
      setNextStatus(rea.next_status);
      const a = Detail;
      a.push(rea);
      setDatail(a);
    })();
    setIsPlaying(true);
  }, []);
  const cleanUpAndNavigate = () => {
    navigate("/specialOffer");
  };

  useEffect(() => {
    if (Detail.length > 0 && videoRefs.current[activeIndex]) {
      const video = videoRefs.current[activeIndex];
      video.muted = false; // 默认静音，以应对自动播放策略
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: any) => {
          console.error("视频自动播放失败", error);
        });
      }
    }
  }, [Detail, activeIndex]);
  //点击停止
  const handleVideoClick = (event: any, index: any) => {
    event.stopPropagation(); // 阻止事件传播
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.muted) {
        videoElement.muted = false; // 取消静音
        videoElement.play(); // 尝试播放视频
      } else {
        // 如果已经取消静音，则根据当前播放状态切换播放或暂停
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    }
  };

  return (
    <ShortVideoWrapper
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Swiper
        direction="vertical"
        className="verticalContent"
        indicator={() => null}
        onIndexChange={(index) => {
          //切换播放
          // handVideoChange(index);
          setActiveIndex(index);
          setIsPlaying(true); // 滑动到新视频时自动播放
        }}
      >
        {Detail.map((item: any, index: number) => (
          <Swiper.Item
            key={index}
            className="verticalContent"
            onClick={() => {
              console.log(1111);
            }}
          >
            <div
              className="videoItem"
              onClick={(event) => handleVideoClick(event, index)}
            >
              <video
                ref={(ref) => (videoRefs.current[index] = ref)}
                className="Video"
                src={item.video_url}
                muted={false}
                loop
                controls // 移除了 muted 属性
              ></video>
              <div className="video-side-right">
                <div className="action-item action-item-user">
                  <img
                    className="shop-logo"
                    src="https://examples-1251000004.cos.ap-shanghai.myqcloud.com/sample.jpeg?imageMogr2/crop/180x180/gravity/center"
                  />
                  <div className="action-btn">
                    <span className="iconfont">+</span>
                  </div>
                  <span className="action-item-span"></span>
                </div>
                <div className="action-item">
                  <span className="iconfont icon-star11beifen">❤</span>
                  <span className="action-item-span">1</span>
                </div>
                <div className="action-item">
                  <span className="iconfont icon-share">☝</span>
                  <span className="action-item-span">分享</span>
                </div>
              </div>
              <div className="video-bottom-areaA">
                <div className="video-bottom-area">
                  <div className="shop-nameA"> @ {item.author} </div>
                  <div className="shop-cardA">{item.intro}</div>
                </div>
              </div>
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
    </ShortVideoWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShortVideo));
