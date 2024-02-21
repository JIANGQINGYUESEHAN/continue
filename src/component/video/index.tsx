/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import Notify from "../../view/Notify";
import ViedoChapter from "../../view/ViedoChapter";
// import FloorComponents from "../../view/FloorComponents";
// import List from "../../view/List";
import End from "../../view/End";
import FloorComponents from "../../view/FloorComponents";
import List from "../../view/List";
import { ProjectList } from "../../service/static/common";

interface IProps {
  children?: ReactNode;
}

const Video: FC<IProps> = () => {
  const [isCartoon, SetIsCarToon] = useState<number>(3);
  const [Project, setProjectList] = useState([]);
  function ClicikType(index: number) {
    SetIsCarToon(index);
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res);
      setProjectList(res.list);
    })();
  }
  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res.list);
      setProjectList(res.list);
    })();
  }, []);

  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  return (
    <VideoWrapper>
      <div className="Select">
        {isCartoon == 3 ? (
          <div className="common" onClick={() => ClicikType(4)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">视频</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(3)}>
            <span className="Comics">视频</span>
          </div>
        )}

        {isCartoon == 4 ? (
          <div className="common" onClick={() => ClicikType(3)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">黑料</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(4)}>
            <span className="Comics">黑料</span>
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

      {isCartoon == 2 ? (
        <>
          <ViedoChapter isCartoon={isCartoon} />
          <List isCartoon={isCartoon} />
          {Project.map((item: any, index: number) => {
            return (
              <FloorComponents isCartoon={isCartoon} key={index} item={item} />
            );
          })}
        </>
      ) : (
        <>
          <ViedoChapter isCartoon={isCartoon} />
          <List isCartoon={isCartoon} />

          {Project.map((item: any, index: number) => {
            return (
              <FloorComponents isCartoon={isCartoon} key={index} item={item} />
            );
          })}
        </>
      )}

      <End />
    </VideoWrapper>
  );
};

export default memo(Video);
