/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import ShortVideoWrapper from "./styled";
import action from "../../store/action";
import { connect } from "react-redux";
import { Swiper } from "antd-mobile";

interface IProps {
  children?: ReactNode;
}

const ShortVideo: FC<IProps> = () => {
  const videoRefs = useRef<any>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  //

  // 当活动索引改变时，播放相应的视频
  useEffect(() => {
    videoRefs.current.forEach((video: any, index: number) => {
      if (index === activeIndex) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // 自动播放开始
            })
            .catch((error: any) => {
              console.error("自动播放被阻止", error);
            });
        }
      } else {
        video.pause(); // 暂停非当前视频
      }
    });
  }, [activeIndex]);

  // 初始化组件时自动播放第一个视频
  useEffect(() => {
    setIsPlaying(true);
  }, []);

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

  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  return (
    <ShortVideoWrapper>
      <Swiper
        direction="vertical"
        className="verticalContent"
        indicator={() => null}
        onIndexChange={(index) => {
          setActiveIndex(index);
          setIsPlaying(true); // 滑动到新视频时自动播放
        }}
      >
        {colors.map((color, index) => (
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
                src="https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4"
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
                  <div className="shop-nameA"> @ hahaha </div>
                  <div className="shop-cardA">111111</div>
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
