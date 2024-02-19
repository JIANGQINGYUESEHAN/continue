/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";

interface IProps {
  children?: ReactNode;
}

const NovelAndComicDetails: FC<IProps> = () => {
  const [isDetail, SetisDetail] = useState(1);
  function ClicikType(index: number) {
    SetisDetail(index);
  }

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
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
      <div className="card-container">
        <div className="left">
          <div className="image">
            <img
              src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
              alt="漫画封面"
              className="img"
            />
          </div>
        </div>
        <div className="right">
          <div className="topName">
            到南满哈哈哈哈 到南满哈哈哈哈到南满哈哈哈哈
          </div>
          <div className="author">
            <span> 作者：</span>
            <span> 哈哈哈哈哈哈哈哈</span>
          </div>
          <div className="time">
            <span> 上线时间：</span>
            <span> 2023-06-23</span>
          </div>
          <div className="Label">
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>{" "}
            <div className="LabelItem">
              <span>都市</span>
            </div>
          </div>
          <div className="Item">
            <div className="Icon">
              <SvgIcon name="eyes" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Icon">
              <SvgIcon name="dianzanIcon" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Icon">
              <SvgIcon name="love" size={12} />
              <span> &nbsp;22222</span>
            </div>
            <div className="Detail">
              <SvgIcon name="dianzan" size={100} />
            </div>
          </div>
        </div>
      </div>

      <div className="DetailTitle">
        <div className="Select">
          {isDetail == 1 ? (
            <div className="common">
              <div className="ContentIcon">
                <SvgIcon name="start" size={60} />
              </div>
              <div className="ContentIconPath">
                <SvgIcon name="path" size={60} color="red" />
              </div>
              <div className="ContentTitle">
                <span className="Comics">目录</span>
              </div>
            </div>
          ) : (
            <div className="common" onClick={() => ClicikType(1)}>
              <span className="Comics">目录</span>
            </div>
          )}

          {isDetail == 2 ? (
            <div className="common">
              <div className="ContentIcon">
                <SvgIcon name="start" size={60} />
              </div>
              <div className="ContentIconPath">
                <SvgIcon name="path" size={60} color="red" />
              </div>
              <div className="ContentTitle">
                <span className="Comics">详情</span>
              </div>
            </div>
          ) : (
            <div className="common" onClick={() => ClicikType(2)}>
              <span className="Comics">详情</span>
            </div>
          )}
        </div>
        <div className="content">
          {isDetail == 1 && (
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
                        <div className="vip">
                          <SvgIcon name="VIPDetail" size={24} />
                        </div>
                        <span className="title">{index}</span>
                      </li>
                    </Swiper.Item>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
        <NavBar left="猜你喜欢" />
        <div className="Content"></div>
      </div>
    </NovelAndComicDetailsWrapper>
  );
};

export default memo(NovelAndComicDetails);
