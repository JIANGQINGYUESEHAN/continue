/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import FloorComponentsWrapper from "./styled";
import NavBar from "../NavBar";
import NovelsAndComics from "../NovelsAndComics";
import VideoItem from "../VideoItem";
import { Skeleton } from "antd-mobile";
import {
  CategoryList,
  CategoryListNextPage,
} from "../../service/static/common";

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
  item?: any;
}

const FloorComponents: FC<IProps> = ({ isCartoon, item }) => {
  const [Detail, setDatail] = useState([]);
  //下一页标识
  const [feedKey, setFeedKey] = useState("");
  //切换下一页
  async function ClickFeedKey() {
    const res = await CategoryListNextPage(
      isCartoon!,
      20,
      1,
      item.code,
      feedKey
    );
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setDatail(res.list);
  }
  useEffect(() => {
    (async () => {
      const res = await CategoryList(isCartoon!, 20, 1, item.code);
      console.log(res);

      // console.log(res);
      setDatail(res.list);
    })();
  }, [isCartoon]);
  return (
    <FloorComponentsWrapper>
      <NavBar left={item.title} onClickA={ClickFeedKey} />
      {isCartoon == 1 || isCartoon == 5 ? (
        <>
          <div className="Content">
            {Detail.length == 0 ? (
              <div
                style={{
                  width: "100%",
                  height: "50px",
                }}
              >
                <Skeleton.Paragraph lineCount={5} animated />
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
                  height: "40px",
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
        </>
      )}
    </FloorComponentsWrapper>
  );
};

export default memo(FloorComponents);