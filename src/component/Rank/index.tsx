/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import RankWrapper from "./styled";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

const Rank: FC<IProps> = () => {
  const tabs = [
    {
      key: "1",
      title: "全部",
    },
    {
      key: "2",
      title: "热血",
    },
    {
      key: "3",
      title: "青春",
    },
    {
      key: "4",
      title: "机甲",
    },
    {
      key: "5",
      title: "魔法",
    },
    {
      key: "6",
      title: "异界",
    },
  ];
  const Tabsa = [
    {
      id: 1,
      key: "人气榜",
    },
    {
      id: 2,
      key: "推荐榜",
    },
    {
      id: 3,
      key: "收藏榜",
    },
    {
      id: 4,
      key: "今日榜",
    },
  ];
  return (
    <RankWrapper>
      <NavBar IsShowChildren={false} middle="历史" />
    </RankWrapper>
  );
};

export default memo(Rank);
