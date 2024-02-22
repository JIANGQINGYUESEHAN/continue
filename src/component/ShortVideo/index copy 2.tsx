/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import ShortVideoWrapper from "./styled";
import action from "../../store/action";
import { connect } from "react-redux";
import { Swiper } from "antd-mobile";
import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";
interface IProps {
  children?: ReactNode;
}

const ShortVideo: FC<IProps> = () => {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  const videoSources = [
    {
      src: "https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4",
      type: "video/mp4",
    },
    // Add more video sources as needed
  ];
  const videoProps: VideoPlayerProps = {
    theme: "city", // 'city', 'fantasy', 'forest', 'sea'

    autoPlay: true,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };
  return (
    <ShortVideoWrapper>
      <Swiper
        direction="vertical"
        className="verticalContent"
        indicator={() => null}
      >
        {colors.map((color, index) => (
          <Swiper.Item key={index} className="verticalContent">
            <div className="videoItem">
              {/* <video
                className="Video"
                controls
                muted
                src="https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4"
              ></video> */}

              <VideoPlayer className="Video" {...videoProps} />
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
              <div className="video-bottom-area">
                <div className="shop-name"> @ hahaha </div>
                <div className="shop-card">111111</div>
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
