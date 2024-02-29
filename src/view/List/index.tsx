/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, memo, ReactNode, FC, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import ListWrapper from "./styled";
import NovelsAndComicsItem from "../NovelsAndComicsItem";
import VideoItem from "../VideoItem";
import {
  GetComicRankingData,
  GetDataForNextPage,
} from "../../service/static/common";
import NavBar from "../NavBar";
import SvgIcon from "../../component/SvgIcon";
import SkeletonItem from "../SkeletonItem";
import Boder from "../boder";

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
}

const List: FC<IProps> = ({ isCartoon }) => {
  // console.log(isCartoon);
  const [selected, setSelected] = useState<number>(0);
  async function ClicikTypeA(index: number) {
    setSelected(index);
    const res = await GetComicRankingData(isCartoon!, 20, selected);
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setDatail(res.list);
  }
  //基础内容
  const [Detail, setDatail] = useState([]);
  // const [ isCartoon, SetIsCarToon] = useState<number>(isCartoon!);
  //下一页标识
  const [feedKey, setFeedKey] = useState("");
  //初始化获取数据
  useEffect(() => {
    //获取排行榜内容
    (async () => {
      // console.log(111);

      const res = await GetComicRankingData(isCartoon!, 20, selected);
      // console.log(res);

      //保存下一页的标识
      setFeedKey(res.feed_key);
      //保存内容
      setDatail(res.list);
    })();
  }, [isCartoon]);
  //点击切换

  //切换下一页
  async function ClickFeedKey() {
    const res = await GetDataForNextPage(isCartoon!, 20, selected, feedKey);
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setDatail(res.list);
  }

  const variants = {
    enter: (direction: any) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  // 切换方向
  const swipe = isCartoon ? -1 : 1;
  return (
    <ListWrapper>
      <NavBar left="排行榜" onClickA={ClickFeedKey} isCartoon={isCartoon} />
      <div className="SelectAA">
        {selected == 0 ? (
          <div className="common" onClick={() => ClicikTypeA(0)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={45} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">人气榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(0)}>
            <span className="Comics">人气榜</span>
          </div>
        )}

        {selected == 1 ? (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={45} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">推荐榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <span className="Comics">推荐榜</span>
          </div>
        )}
        {selected == 2 ? (
          <div className="common" onClick={() => ClicikTypeA(2)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={45} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">收藏榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(2)}>
            <span className="Comics">收藏榜</span>
          </div>
        )}
        {selected == 3 ? (
          <div className="common" onClick={() => ClicikTypeA(3)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={45} />
            </div>
            <div className="ContentTitle">
              <span className="Comics"> 今日榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(3)}>
            <span className="Comics">今日榜</span>
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          custom={swipe}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          style={{ width: "100%" }}
        >
          {isCartoon == 1 || isCartoon == 5 ? (
            <>
              <div className="Content">
                {Detail.length == 0 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <SkeletonItem />
                    <SkeletonItem />
                    <SkeletonItem />
                  </div>
                ) : (
                  <>
                    {Detail.map((item: any, index: number) => {
                      return (
                        <NovelsAndComicsItem
                          key={index}
                          item={item}
                          isCartoon={isCartoon}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="ContentA">
                {Detail.length == 0 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <SkeletonItem />
                    <SkeletonItem />
                    <SkeletonItem />
                  </div>
                ) : (
                  <>
                    {Detail.map((item: any, index: number) => {
                      return (
                        <VideoItem
                          key={index}
                          item={item}
                          isCartoon={isCartoon}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </>
          )}
          <Boder />
        </motion.div>
      </AnimatePresence>
    </ListWrapper>
  );
};

export default memo(List);
