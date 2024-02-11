import React, { useState, memo, ReactNode, FC } from "react";
import { TabBar } from "antd-mobile";
import { AnimatePresence, motion } from "framer-motion";
import ListWrapper from "./styled";
import NovelsAndComicsItem from "../NovelsAndComicsItem";
import VideoItem from "../VideoItem";

const tabs = [
  {
    key: "home",
    title: "最新榜",
    content: "这是首页的内容",
  },
  {
    key: "todo",
    title: "阅览榜",
    content: "这是待办的内容",
  },
  {
    key: "message",
    title: "收藏榜",
    content: "这是消息的内容",
  },
  {
    key: "personalCenter",
    title: "推荐榜",
    content: "这是个人中心的内容",
  },
];

interface IProps {
  children?: ReactNode;
  isCartoon: number;
}

const List: FC<IProps> = ({ isCartoon }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <ListWrapper>
      <TabBar onChange={(key) => setActiveTab(key)}>
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
          {isCartoon == 1 ? (
            <>
              <div className="Content">
                <NovelsAndComicsItem />
                <NovelsAndComicsItem />
                <NovelsAndComicsItem />
                <NovelsAndComicsItem />
              </div>
            </>
          ) : (
            <>
              <div className="ContentA">
                <VideoItem />
                <VideoItem />
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </ListWrapper>
  );
};

export default memo(List);
