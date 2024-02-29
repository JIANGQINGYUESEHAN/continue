/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import CategoryListAllNovelWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import { Skeleton } from "antd-mobile";
import { CategoryList, ProjectList } from "../../service/static/common";
import { flushSync } from "react-dom";
import SkeletonItem from "../SkeletonItem";
import Boder from "../boder";
import { AnimatePresence, motion } from "framer-motion";
import NovelsAndComics from "../NovelsAndComics";

interface IProps {
  children?: ReactNode;
  isCartoon?: any;
}

const CategoryListAllNovelA: FC<IProps> = ({ children, isCartoon = 5 }) => {
  const [isNovelCategoryIndex, SetIsNovelCategoryIndex] = useState<number>(0);
  //点击切换
  const [CategoryListAllNovel, setCategoryListAllNovel] = useState<any>([]);
  //基础内容
  const [Detail, setDatail] = useState([]);
  useEffect(() => {
    (async () => {
      const rea = await ProjectList(5);
      console.log(rea);
      //title
      setCategoryListAllNovel(rea.list);
      flushSync;

      // console.log(CategoryListAllNovel[isNovelCategoryIndex].code);
      const code = rea.list[isNovelCategoryIndex].code;
      console.log(code);

      const res = await CategoryList(isCartoon!, 20, 0, code);
      console.log(res);
      setDatail(res.list);
    })();
  }, []);
  function ClickChange(index: number) {
    // console.log(index);
    SetIsNovelCategoryIndex(index);
  }
  useEffect(() => {
    (async () => {
      const code = CategoryListAllNovel[isNovelCategoryIndex]?.code;

      const res = await CategoryList(isCartoon!, 20, 0, code);

      setDatail(res.list);
    })();
  }, [isNovelCategoryIndex]);

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
  const swipe = isNovelCategoryIndex ? -1 : 1;
  return (
    <CategoryListAllNovelWrapper>
      {CategoryListAllNovel.length == 0 ? (
        <div
          style={{
            width: "100%",
            height: "20px",
          }}
        >
          <Skeleton.Paragraph lineCount={1} animated />
        </div>
      ) : (
        <>
          <div className="Select">
            {CategoryListAllNovel.map((category: any, index: number) => {
              return (
                <div
                  className="common"
                  key={index}
                  onClick={() => ClickChange(index)}
                >
                  {isNovelCategoryIndex == index ? (
                    <>
                      <div className="ContentIcon">
                        <SvgIcon name="CheckCircle" size={35} />
                      </div>
                      <div className="ContentTitle">
                        <span className="Comics">{category.title}</span>
                      </div>
                    </>
                  ) : (
                    <span className="Comics">{category.title}</span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {children}
      <AnimatePresence mode="wait">
        <motion.div
          key={isNovelCategoryIndex}
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

          <Boder />
        </motion.div>
      </AnimatePresence>
    </CategoryListAllNovelWrapper>
  );
};

export default memo(CategoryListAllNovelA);
