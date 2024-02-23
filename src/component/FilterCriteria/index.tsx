/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import FilterCriteriaWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { connect } from "react-redux";
import action from "../../store/action";
import { WithRouter } from "../../router";
import {
  CategoryListNextPage,
  GetComicRankingData,
  ProjectList,
} from "../../service/static/common";
import VideoItem from "../../view/VideoItem";
import { InfiniteScroll, Skeleton } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";

interface IProps {
  children?: ReactNode;
  query?: any;
}

const FilterCriteria: FC<IProps> = ({ query }) => {
  const { isCartoon } = query;
  //第一层

  const [isDetail, SetisDetail] = useState(isCartoon);

  const [feedKey, SetfeedKey] = useState("");
  const [hasMore, setHasMore] = useState(true);

  //第三层
  const [selected, setSelected] = useState<number>(0);
  const [ProjectListA, setProjectList] = useState<any>([]);
  const [List, Setlist] = useState([]);
  //第二层
  const [CategoryIndex, setCategoryIndex] = useState(0);

  const [Category, setCategory] = useState();

  function ClicikType(index: number) {
    SetisDetail(index);
  }
  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res);
      setProjectList(res.list);

      //初始化数据
      const rea = await GetComicRankingData(isCartoon, 20, selected);
      Setlist(rea.list);
      // //点击时记录下一页的字符串
      SetfeedKey(rea.feed_key);
    })();
  }, []);

  async function loadMore() {
    const res = await CategoryListNextPage(
      isCartoon,
      20,
      selected,
      Category!,
      feedKey
    );
    // console.log(res);
    Setlist(res.list);
    // //点击时记录下一页的字符串
    SetfeedKey(res.feed_key);
  }

  //点击点击重新请求
  useEffect(() => {
    (async () => {
      Setlist([]);
      const res = await CategoryListNextPage(
        isDetail,
        20,
        selected,
        Category!,
        feedKey
      );

      Setlist(res.list);
      //点击时记录下一页的字符串
      SetfeedKey(res.feed_key);
      //也会重新请求标题

      const rea = await ProjectList(isDetail);
      // console.log(rea);
      setProjectList(rea.list);
    })();
  }, [selected, CategoryIndex, isDetail]);

  //获取
  const handleClick = (index: number) => {
    const a = ProjectListA[index].code;
    setCategory(a);
    setCategoryIndex(index);
  };
  useEffect(() => {
    if (feedKey !== "") {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [feedKey]);
  //获取各个榜
  function ClicikTypeA(index: number) {
    setSelected(index);
  }
  return (
    <FilterCriteriaWrapper>
      <NavBar IsShowChildren={false} middle="条件" />
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
      <div className="content">
        {ProjectListA.map((text: any, index: number) => (
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

      <div className="SelectAA">
        {selected == 0 ? (
          <div className="common" onClick={() => ClicikTypeA(0)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">人气榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(0)}>
            <span className="Comics">人气榜</span>
          </div>
        )}

        {selected == 1 ? (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">推荐榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <span className="Comics">推荐榜</span>
          </div>
        )}
        {selected == 2 ? (
          <div className="common" onClick={() => ClicikTypeA(2)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">收藏榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(2)}>
            <span className="Comics">收藏榜</span>
          </div>
        )}
        {selected == 3 ? (
          <div className="common" onClick={() => ClicikTypeA(3)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
            </div>
            <div className="ContentTitle">
              <span className="Comics"> 今日榜</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(3)}>
            <span className="Comics">今日榜</span>
          </div>
        )}
      </div>
      {List.length == 0 ? (
        <div
          style={{
            width: "100%",
            height: "100px",
          }}
        >
          <Skeleton.Paragraph lineCount={4} animated />
        </div>
      ) : (
        <div className="right">
          {isDetail == 5 || isDetail == 1 ? (
            <div className="Content">
              {List.map((item: any, index: any) => {
                return (
                  <NovelsAndComics
                    key={index}
                    item={item}
                    isCartoon={isDetail}
                  />
                );
              })}
            </div>
          ) : (
            <div className="ContentA">
              {List.map((item: any, index: any) => {
                return (
                  <VideoItem key={index} item={item} isCartoon={isDetail} />
                );
              })}
            </div>
          )}
        </div>
      )}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
    </FilterCriteriaWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(FilterCriteria)));
