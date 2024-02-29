/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import VideoChapterWrapper from "./styled";
// import SvgIcon from "../../component/SvgIcon";
import NavBar from "../NavBar";
import VideoItem from "../VideoItem";
import { GetComicRankingData } from "../../service/static/common";
import { Skeleton } from "antd-mobile";
import Boder from "../boder";

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
}

const VideoChapter: FC<IProps> = ({ isCartoon }) => {
  const [Detail, setDatail] = useState([]);
  useEffect(() => {
    //获取排行榜内容
    (async () => {
      // console.log(111);

      const res = await GetComicRankingData(isCartoon!, 20, 0);

      //保存下一页的标识
      // setFeedKey(res.feed_key);
      //保存内容
      setDatail(res.list);
    })();
  }, [isCartoon]);
  return (
    <VideoChapterWrapper>
      <NavBar left="更多" />
      {/* <div className="detail">
        <div className="top">
          <div className="imageTop">
            <div className="videoImag">
              <img
                src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
                alt=""
                className="img"
              />
            </div>
          </div>
          <div className="detailTop">
            <div className="firstFloor">
              <div className="counters">
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="eyes" />
                  </span>
                  <span className="number">234</span>
                </div>
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="love" />
                  </span>
                  <span className="number">128</span>
                </div>
                <div className="counter">
                  <span className="icon">
                    <SvgIcon name="love" />
                  </span>
                  <span className="number">128</span>
                </div>
              </div>
            </div>
            <span className="titleAuthor">作者：统计概览</span>
            <span className="title">统计概览 统计概览</span>
          </div>
        </div>
        <div className="middle">
          <div className="Label">
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>
            <div className="LabelItem">
              <span>都市</span>
            </div>
          </div>
          <div className="Collect">
            <SvgIcon name="dianzan" size={100} />
          </div>
        </div>
      </div> */}

      <div className="ContentA">
        {Detail.length == 0 ? (
          <div
            style={{
              width: "100%",
              height: "100px",
            }}
          >
            <Skeleton.Paragraph lineCount={5} animated />
          </div>
        ) : (
          <>
            {Detail.map((item: any, index: number) => {
              return (
                <VideoItem key={index} item={item} isCartoon={isCartoon} />
              );
            })}
          </>
        )}
      </div>
      <Boder />
    </VideoChapterWrapper>
  );
};

export default memo(VideoChapter);
