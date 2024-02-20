/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import ShortVideoWrapper from "./styled";
import action from "../../store/action";
import { connect } from "react-redux";
import { Swiper } from "antd-mobile";

interface IProps {
  children?: ReactNode;
}

const ShortVideo: FC<IProps> = () => {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  return (
    <ShortVideoWrapper>
      <Swiper
        direction="vertical"
        className="verticalContent"
        indicator={() => null}
      >
        {colors.map((color, index) => (
          <Swiper.Item key={index} className="verticalContent">
            <div style={{ background: color, width: "100%", height: "100%" }}>
              <video
                className="Video"
                src="https://xjc.demo.hongcd.com/uploads/20210128/0c64cbeea28b10c06eee8728c762449e.mp4"
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
