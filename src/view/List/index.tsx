/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, memo, ReactNode, FC, useEffect } from "react";
import { Skeleton, TabBar } from "antd-mobile";
import { AnimatePresence, motion } from "framer-motion";
import ListWrapper from "./styled";
import NovelsAndComicsItem from "../NovelsAndComicsItem";
import VideoItem from "../VideoItem";
import {
  GetComicRankingData,
  GetDataForNextPage,
} from "../../service/static/common";
import NavBar from "../NavBar";

const tabs = [
  {
    key: "1",
    title: "最新榜",
    content: "这是首页的内容",
  },
  {
    key: "2",
    title: "阅览榜",
    content: "这是待办的内容",
  },
  {
    key: "3",
    title: "收藏榜",
    content: "这是消息的内容",
  },
  {
    key: "4",
    title: "推荐榜",
    content: "这是个人中心的内容",
  },
];

interface IProps {
  children?: ReactNode;
  isCartoon?: number;
}

const List: FC<IProps> = ({ isCartoon }) => {
  console.log(isCartoon);

  const [activeTab, setActiveTab] = useState<any>(tabs[0].key);
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

      const res = await GetComicRankingData(isCartoon!, 20, activeTab * 1);
      console.log(res);

      //保存下一页的标识
      setFeedKey(res.feed_key);
      //保存内容
      setDatail(res.list);
    })();
  }, [isCartoon]);
  //点击切换
  async function ClickChange(key: any) {
    setActiveTab(key);
    const res = await GetComicRankingData(isCartoon!, 20, activeTab * 1);
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setDatail(res.list);
  }
  //切换下一页
  async function ClickFeedKey() {
    const res = await GetDataForNextPage(
      isCartoon!,
      20,
      activeTab * 1,
      feedKey
    );
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setDatail(res.list);
  }
  return (
    <ListWrapper>
      <NavBar left="排行榜" onClickA={ClickFeedKey} />
      <TabBar onChange={(key) => ClickChange(key)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} title={item.title} />
        ))}
      </TabBar>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ minHeight: "200px", minWidth: "100%" }}
        >
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
                    <div
                      style={{
                        width: "100%",
                        height: "50px",
                      }}
                    >
                      <Skeleton.Paragraph lineCount={5} animated />
                    </div>
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
                      height: "100px",
                    }}
                  >
                    <Skeleton.Paragraph lineCount={5} animated />
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
    </ListWrapper>
  );
};

export default memo(List);
