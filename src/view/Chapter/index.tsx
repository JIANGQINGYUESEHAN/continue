/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import ChapterWrapper from "./styled";

import { CategoryList, ProjectList } from "../../service/static/common";
import VideoItem from "../VideoItem";
import SkeletonItem from "../SkeletonItem";

import { AnimatePresence, motion } from "framer-motion";
import NovelsAndComics from "../NovelsAndComics";
import Boder from "../boder";
import SvgIcon from "../../component/SvgIcon";
import NavBar from "../NavBar";

interface IProps {
  children?: ReactNode;
  isCartoon?: any;
}

const Chapter: FC<IProps> = ({ isCartoon = 1, children }) => {
  const [TitleArray, setTitleArray] = useState<any>([]);
  const [CategoryIndex, setCategoryIndex] = useState(0);
  const [Category, setCategory] = useState("");
  //基础内容
  const [Detail, setDatail] = useState([]);
  //获取数据
  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res);
      setTitleArray(res.list);
      const rea = await CategoryList(isCartoon!, 20, 0, Category);
      // console.log(rea);
      setDatail(rea.list);
    })();
  }, []);

  const handleClick = (index: number) => {
    const a = TitleArray[index].code;
    setCategory(a);
    setCategoryIndex(index);
  };

  useEffect(() => {
    (async () => {
      const rea = await CategoryList(isCartoon!, 20, 0, Category);
      // console.log(rea);
      setDatail(rea.list);
    })();
  }, [CategoryIndex]);
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
    <ChapterWrapper>
      <div className="content">
        {TitleArray.map((text: any, index: number) => (
          <div
            key={index}
            className={`leftUl ${
              CategoryIndex === index ? "selected leftUl" : " leftUl"
            }`}
            onClick={() => handleClick(index)}
          >
            {text.title}
          </div>
        ))}
      </div>
      {children}
      {(isCartoon == 3 || isCartoon == 4) && (
        // 只有当isCartoon不是3也不是4时才会渲染这里的内容
        <>
          <NavBar left="最近更新" isCartoon={isCartoon} />
          <div className="detail">
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
                      <span className="number">333</span>
                    </div>
                    <div className="counter">
                      <span className="icon">
                        <SvgIcon name="dianzanIcon" />
                      </span>
                      <span className="number">111</span>
                    </div>
                    <div className="counter">
                      <span className="icon">
                        <SvgIcon name="love" />
                      </span>
                      <span className="number">777</span>
                    </div>
                  </div>
                </div>
                <span className="titleAuthorA">上线时间：2022nian</span>
                <span className="titleAuthor">作者：hahha</span>
                <span className="title">迷哦书</span>
              </div>
            </div>
            <div className="middle">
              <div className="Label">
                <div className="LabelItem">
                  <span>sss</span>
                </div>
              </div>
              <div className="Collect">
                <SvgIcon name="dianzan" size={100} />
              </div>
            </div>
          </div>
        </>
      )}
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
    </ChapterWrapper>
  );
};

export default memo(Chapter);
