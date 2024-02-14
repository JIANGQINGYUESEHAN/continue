import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import Notify from "../../view/Notify";
import ViedoChapter from "../../view/ViedoChapter";
import FloorComponents from "../../view/FloorComponents";
import List from "../../view/List";
import End from "../../view/End";

interface IProps {
  children?: ReactNode;
}

const Video: FC<IProps> = () => {
  const [isCartoon, SetIsCarToon] = useState<number>(1);
  function ClicikType(index: number) {
    SetIsCarToon(index);
  }
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  return (
    <VideoWrapper>
      <div className="Select">
        {isCartoon == 1 ? (
          <div className="common" onClick={() => ClicikType(2)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">漫画</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(1)}>
            <span className="Comics">漫画</span>
          </div>
        )}

        {isCartoon == 2 ? (
          <div className="common" onClick={() => ClicikType(1)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">动漫</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(2)}>
            <span className="Comics">动漫</span>
          </div>
        )}
      </div>
      <div className="carousel">
        <Swiper className="Swiper" loop autoplay>
          {colors.map((color, index) => (
            <Swiper.Item key={index}>
              <div className="Swiper" style={{ background: color }}>
                {index + 1}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      {/* 公告提示 */}
      <Notify />
      <ViedoChapter />
      <List isCartoon={2} />
      <FloorComponents isCartoon={2} />
      <FloorComponents isCartoon={2} />
      <FloorComponents isCartoon={2} />
      <End />
    </VideoWrapper>
  );
};

export default memo(Video);
