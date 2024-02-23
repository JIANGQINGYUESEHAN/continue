/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import SvgIcon from "../SvgIcon";
import CollectWrapper from "./styled";
import NavBar from "../../view/NavBar";
import {
  GetCollectList,
  GetHistoricalInformation,
} from "../../service/static/common";

import { InfiniteScroll } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";
import VideoItem from "../../view/VideoItem";

interface IProps {
  children?: ReactNode;
}

const Collect: FC<IProps> = () => {
  const [isDetail, SetisDetail] = useState(1);
  const [List, Setlist] = useState([]);
  const [feedKey, SetfeedKey] = useState("");
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    const res = await GetHistoricalInformation(isDetail, 20, feedKey);
    // console.log(res);
    Setlist(res.list);
    // //点击时记录下一页的字符串
    SetfeedKey(res.feed_key);
  }
  useEffect(() => {
    (async () => {
      const res = await GetCollectList(1, 20);
      // console.log(res.feed_key);
      SetfeedKey(res.feed_key);
    })();
  });
  //监听 feedKey变换
  useEffect(() => {
    if (feedKey !== "") {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [feedKey]);
  //点击切换
  async function ClicikType(index: number) {
    SetisDetail(index);

    //发送请求
    const res = await GetCollectList(index, 20, feedKey);
    // console.log(res);
    Setlist(res.list);
    // //点击时记录下一页的字符串
    SetfeedKey(res.feed_key);
  }
  return (
    <CollectWrapper>
      <NavBar IsShowChildren={false} middle="收藏" />
      <div className="Select">
        {isDetail == 1 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">漫画</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(1)}>
            <span className="Comics">漫画</span>
          </div>
        )}

        {isDetail == 2 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">动漫</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(2)}>
            <span className="Comics">动漫</span>
          </div>
        )}
        {isDetail == 3 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">视频</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(3)}>
            <span className="Comics">视频</span>
          </div>
        )}

        {isDetail == 4 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">黑料</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(4)}>
            <span className="Comics">黑料</span>
          </div>
        )}

        {isDetail == 5 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">小说</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(5)}>
            <span className="Comics">小说</span>
          </div>
        )}
      </div>
      {isDetail == 5 || isDetail == 1 ? (
        <div className="Content">
          {List.map((item: any, index: any) => {
            return (
              <NovelsAndComics isCartoon={isDetail} key={index} item={item} />
            );
          })}
        </div>
      ) : (
        <div className="ContentA">
          {List.map((item: any, index: any) => {
            return <VideoItem isCartoon={isDetail} key={index} item={item} />;
          })}
        </div>
      )}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
    </CollectWrapper>
  );
};

export default memo(Collect);
