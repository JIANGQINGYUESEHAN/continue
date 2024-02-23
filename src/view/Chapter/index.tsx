/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import ChapterWrapper from "./styled";

import { CategoryList, ProjectList } from "../../service/static/common";
import VideoItem from "../VideoItem";
import SkeletonItem from "../SkeletonItem";

import { AnimatePresence, motion } from "framer-motion";
import NovelsAndComics from "../NovelsAndComics";

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
        </motion.div>
      </AnimatePresence>
    </ChapterWrapper>
  );
};

export default memo(Chapter);
