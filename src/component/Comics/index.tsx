/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import ComicsWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";

interface IProps {
  children?: ReactNode;
}

const Comics: FC<IProps> = () => {
  const [isCartoon, SetIsCarToon] = useState(1);
  function ClicikType(index: number) {
    SetIsCarToon(index);
  }
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  return (
    <ComicsWrapper>
      {/* 漫画和动漫的切换 */}
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
      {/* 轮播图 */}
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
    </ComicsWrapper>
  );
};

export default memo(Comics);
