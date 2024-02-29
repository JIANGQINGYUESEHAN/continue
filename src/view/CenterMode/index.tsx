import { memo } from "react";
import type { FC, ReactNode } from "react";

import CenterModeWrapper from "./styled";
import { Swiper } from "antd-mobile";
interface IProps {
  children?: ReactNode;
}

const CenterMode: FC<IProps> = () => {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac", "#ffd6e7"];

  const DATA_COUNT = 5;

  return (
    <CenterModeWrapper>
      <div className="slider-container">
        <Swiper
          className="root"
          slideSize={60}
          trackOffset={20}
          stuckAtBoundary={false}
          defaultIndex={2}
        >
          {colors.map((item, index) => {
            return (
              <Swiper.Item key={index}>
                <div
                  className="scaleContent"
                  style={{ background: colors[index % DATA_COUNT] }}
                >
                  {index + 1}
                </div>
              </Swiper.Item>
            );
          })}
        </Swiper>
      </div>
    </CenterModeWrapper>
  );
};

export default memo(CenterMode);
