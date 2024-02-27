/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import RankWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import action from "../../store/action";
import { connect } from "react-redux";
import { WithRouter } from "../../router";
import {
  CategoryListNextPage,
  GetComicRankingData,
  ProjectList,
} from "../../service/static/common";
import { InfiniteScroll } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";

import VideoItemA from "../../view/VideoItemA";
import SkeletonItem from "../../view/SkeletonItem";

interface IProps {
  children?: ReactNode;
  query?: any;
}

const Rank: FC<IProps> = ({ query }) => {
  const { isCartoon } = query;
  // console.log(isCartoon);

  const [isCartoonA, SetIsCarToon] = useState<number>(0);
  const [feedKey, SetfeedKey] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [selected, setSelected] = useState<number>(0);
  const [ProjectListA, setProjectList] = useState<any>([]);
  const [List, Setlist] = useState([]);
  const [Category, setCategory] = useState("DS");
  async function loadMore() {
    const res = await CategoryListNextPage(
      isCartoon,
      20,
      isCartoonA,
      Category!,
      feedKey
    );
    // console.log(res);
    Setlist(res.list);
    // //点击时记录下一页的字符串
    SetfeedKey(res.feed_key);
  }

  //左边
  const handleClick = (index: number) => {
    const a = ProjectListA[index].code;
    setCategory(a);
    console.log(a);

    setSelected(index);
  };

  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res);
      setProjectList(res.list);

      //初始化数据
      const rea = await GetComicRankingData(isCartoon, 20, isCartoonA);
      Setlist(rea.list);
      // //点击时记录下一页的字符串
      SetfeedKey(rea.feed_key);
    })();
  }, []);

  //点击重新请求
  useEffect(() => {
    (async () => {
      const res = await CategoryListNextPage(
        isCartoon,
        20,
        isCartoonA,
        Category!,
        feedKey
      );
      console.log(res);
      console.log(isCartoon, isCartoonA, Category);

      Setlist(res.list);
      // //点击时记录下一页的字符串
      SetfeedKey(res.feed_key);
    })();
  }, [selected, isCartoonA]);
  //上面
  function ClicikType(index: number) {
    SetIsCarToon(index);
  }

  useEffect(() => {
    if (feedKey !== "") {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [feedKey]);

  return (
    <RankWrapper>
      <NavBar IsShowChildren={false} middle="排行榜" />
      <div className="Select">
        {isCartoonA == 0 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">人气榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(0)}>
            <span className="Comics">人气榜</span>
          </div>
        )}

        {isCartoonA == 1 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">推荐榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(1)}>
            <span className="Comics">推荐榜</span>
          </div>
        )}
        {isCartoonA == 2 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">收藏榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(2)}>
            <span className="Comics">收藏榜</span>
          </div>
        )}

        {isCartoonA == 3 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">今日榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(3)}>
            <span className="Comics">今日榜</span>
          </div>
        )}
      </div>

      <div className="content">
        <div className="left">
          {ProjectListA.map((text: any, index: number) => (
            <div
              key={index}
              className={`leftUl ${
                selected === index ? "selected leftUl" : " leftUl"
              }`}
              onClick={() => handleClick(index)}
            >
              {text.title}
            </div>
          ))}
        </div>
        <div className="all">
          {List.length == 0 ? (
            <div
              style={{
                width: "100%",
                height: "180px",
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-around",
                justifyContent: "space-around",
              }}
            >
              <SkeletonItem />
              <SkeletonItem />
            </div>
          ) : (
            <div className="right">
              {isCartoon == 5 || isCartoon == 1 ? (
                <div className="Content">
                  {List.map((item: any, index: any) => {
                    return (
                      <NovelsAndComics
                        isCartoon={isCartoon}
                        key={index}
                        item={item}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="ContentA">
                  {List.map((item: any, index: any) => {
                    return (
                      <VideoItemA
                        isCartoon={isCartoon}
                        key={index}
                        item={item}
                      />
                    );
                  })}
                </div>
              )}
              <InfiniteScroll
                loadMore={loadMore}
                hasMore={hasMore}
                threshold={10}
              />
            </div>
          )}
        </div>
      </div>
    </RankWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(Rank)));
