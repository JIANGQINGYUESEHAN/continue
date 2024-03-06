/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import FloorComponentsWrapper from "./styled";
import NavBar from "../NavBar";

import VideoItem from "../VideoItem";

import {
  CategoryList,
  CategoryListNextPage,
} from "../../service/static/common";
import SkeletonItem from "../SkeletonItem";
import Boder from "../boder";
import RankItem from "../RankItem";

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
  item?: any;
}

const FloorComponents: FC<IProps> = ({ isCartoon, item }) => {
  const [Detail, setDetail] = useState([]);
  const [feedKey, setFeedKey] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await CategoryList(isCartoon!, 20, 1, item.code);

      setDetail(res.list);
      setFeedKey(res.feed_key);
    };
    fetchData();
  }, [isCartoon, item.code]);

  const ClickFeedKey = async () => {
    const res = await CategoryListNextPage(
      isCartoon!,
      20,
      1,
      item.code,
      feedKey
    );
    setFeedKey(res.feed_key);
    setDetail(res.list);
  };

  const renderContent = () => {
    if (Detail.length === 0) {
      return (
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
      );
    }

    return Detail.map((item, index) => {
      if (isCartoon === 1 || isCartoon === 5) {
        return (
          <RankItem key={index} item={item} isCartoon={isCartoon} />
          /*  <NovelsAndComics key={index} item={item} isCartoon={isCartoon} /> */
        );
      } else {
        return <VideoItem key={index} item={item} isCartoon={isCartoon} />;
      }
    });
  };

  return (
    <FloorComponentsWrapper>
      <NavBar left={item.title} onClickA={ClickFeedKey} isCartoon={isCartoon} />
      <div
        className={isCartoon === 1 || isCartoon === 5 ? "Content" : "ContentA"}
      >
        {renderContent()}
      </div>
      <Boder />
    </FloorComponentsWrapper>
  );
};
export default memo(FloorComponents);
