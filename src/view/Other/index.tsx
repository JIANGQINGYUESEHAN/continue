/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import OtherWrapper from "./styled";
import { GetDataForNextPage } from "../../service/static/common";
import NavBar from "../NavBar";
import Boder from "../boder";
import { AnimatePresence, motion } from "framer-motion";
import VideoItem from "../VideoItem";
import SkeletonItem from "../SkeletonItem";
import NovelsAndComics from "../NovelsAndComics";

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
}

const Other: FC<IProps> = ({ isCartoon = 1 }) => {
  const [feedKey, setFeedKey] = useState("");
  const [Detail, setDatail] = useState([]);
  const [CategoryIndex, setCategoryIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  //切换下一页
  async function ClickFeedKey() {
    const res = await GetDataForNextPage(isCartoon!, 20, 0, feedKey);
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
  const swipe = CategoryIndex ? -1 : 1;
  return (
    <OtherWrapper>
      <NavBar left="排行榜" />
      <div className="content">
        <div
          className={`leftUl ${
            selectedIndex === 0 ? "selected leftUl" : " leftUl"
          }`}
        >
          dd
        </div>
        <div
          className={`leftUl ${
            selectedIndex === 1 ? "selected leftUl" : " leftUl"
          }`}
        >
          dd
        </div>
        <div
          className={`leftUl ${
            selectedIndex === 2 ? "selected leftUl" : " leftUl"
          }`}
        >
          dd
        </div>
        <div
          className={`leftUl ${
            selectedIndex === 3 ? "selected leftUl" : " leftUl"
          }`}
        >
          dd
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={CategoryIndex}
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
                        <NovelsAndComics
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
    </OtherWrapper>
  );
};

export default memo(Other);
