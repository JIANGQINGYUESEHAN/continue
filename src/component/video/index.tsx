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
import { connect } from "react-redux";
import action from "../../store/action";
import Select from "../../view/Select";

interface IProps {
  children?: ReactNode;
  CarouselList?: any;
}

const Video: FC<IProps> = ({ CarouselList }) => {
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
          {CarouselList?.map((color: any, index: number) => (
            <Swiper.Item key={index}>
              <div className="Swiper" style={{ background: color }}>
                <img src={color.img_url} alt="" className="imag" />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      {/* 公告提示 */}
      <Select isCartoon={isCartoon} />
      <Notify />

      {isCartoon == 3 ? (
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

      <End isCartoon={isCartoon} />
    </VideoWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(Video));
