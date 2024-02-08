/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import ChapterWrapper from "./styled";
import { Swiper } from "antd-mobile";

interface IProps {
  children?: ReactNode;
}

const Chapter: FC<IProps> = () => {
  const SwiperArray: any = [
    "全部",
    "玩具",
    "衣服",
    "图书",
    "家居",
    "鞋帽",
    "食品",
    "电器",
    "美妆",
    "户外",
  ]; // 假设这是你想展示的数据
  return (
    <ChapterWrapper>
      <div className="content">
        <div className="type">
          <Swiper
            autoplay={false}
            slideSize={20} // 根据视觉效果调整，保证两边有间隔
            trackOffset={10} // 两边的间隔
            indicator={() => null}
            className="ul"
          >
            {SwiperArray.map((item: any, index: number) => {
              return (
                <Swiper.Item key={index}>
                  <li className={`list ${index === 0 ? "active" : ""}`}>
                    <span className="title">{item}</span>
                  </li>
                </Swiper.Item>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ChapterWrapper>
  );
};

export default memo(Chapter);
