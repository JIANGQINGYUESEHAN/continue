/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Skeleton, Swiper, Toast } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";
import { WithRouter } from "../../router";
import {
  BuyWithSpark,
  CategoryList,
  GetDataForNextPage,
  GetDetailsAboutNovelsAndComics,
  gethandleCollect,
} from "../../service/static/common";
import toYearMonthDay from "../../utils/time";
import { PlayOutline } from "antd-mobile-icons";
import action from "../../store/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import NovelsAndComicsItem from "../../view/NovelsAndComicsItem";
import { flushSync } from "react-dom";

interface IProps {
  children?: ReactNode;
  query?: any;
  info?: any;
}

const NovelAndComicDetails: FC<IProps> = ({ query, info }) => {
  const { resource_id, isCartoon } = query;
  const [Item, setItem] = useState<any>();
  const [isDetail, SetisDetail] = useState(1);
  const [hasData, setHasData] = useState(false);
  const [Index, setIndex] = useState(0);
  const Navigate = useNavigate();
  const [OtherDetail, setOtherDetail] = useState<any>([]);
  const [SwiperArray, setSwiperArray] = useState([]);
  const [feedKey, setFeedKey] = useState("");
  function ClicikType(index: number) {
    SetisDetail(index);
  }

  //点击
  async function ClickIndex(index: number) {
    setIndex(index);

    // 然后进行播放
    //资源的所有详情
    let accessType;
    let sparkCount;
    let resourceId;
    let sectionId;
    //判断 章节是否为数组

    if (Array.isArray(Item.book_section_list)) {
      accessType = Item.book_section_list[index].access_type;
      sparkCount = Item.book_section_list[index].spark_count;
      resourceId = Item.resource_id;
      sectionId = Item.book_section_list[index].section_id;
    } else {
      accessType = Item.access_type;
      sparkCount = Item.spark_count;
      resourceId = Item.resource_id;
      sectionId = Item.section_id;
    }

    //获取用户的详情
    const Isvip = info.is_vip;

    const sparkCountAll = info.spark_balance;
    //不要会员就可以
    if (accessType == 1) {
      PlayDirectly(resourceId, sectionId);
    }
    //会员
    if (accessType == 2) {
      if (Isvip == 2) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
    // //火花
    if (accessType == 3) {
      //不是会员火花不够
      if (Isvip == 2 && sparkCountAll < sparkCount) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      //不是会员火花够了
      if (Isvip == 2 && sparkCountAll > sparkCount) {
        //用火花进行购买
        const rea = await BuyWithSpark(resourceId, sectionId);
        if (rea.msg == "请求成功") {
          PlayDirectly(resourceId, sectionId);
        } else {
          Toast.show({
            icon: "fail",
            content: "请重试",
          });
        }
      }

      //是会员
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
  }
  //收藏
  async function Collect(item: any) {
    console.log(item.collect_status);
    const resourceId = item.resource_id;
    if (item.collect_status == 2) {
      //收藏

      const res = await gethandleCollect(1, resourceId);

      if (res.msg == "请求成功") {
        Toast.show({
          icon: "success",
          content: "收藏成功",
        });
      }
    } else {
      const res = await gethandleCollect(2, resourceId);
      console.log(res);

      if (res.msg == "请求成功") {
        Toast.show({
          icon: "success",
          content: "取消收藏成功",
        });
      }
    }
    //切换
    const res = await GetDetailsAboutNovelsAndComics(resourceId);
    console.log(res);
    setItem(res);
  }
  //获取数据
  useEffect(() => {
    (async () => {
      const res = await GetDetailsAboutNovelsAndComics(resource_id);
      console.log(res);
      setItem(res);
      setSwiperArray(res.book_section_list);
      //获取相同的
      const Category = res.category;
      const rea = await CategoryList(isCartoon, 20, 0, Category);

      setOtherDetail(rea.list);

      setFeedKey(res.feed_key);
      flushSync;
      if (Item !== "") {
        setHasData(true);
      }
    })();
  }, []);
  //点击播放
  async function ClickPlay(Item: any) {
    //资源的所有详情
    let accessType;
    let sparkCount;
    let resourceId;
    let sectionId;
    //判断 章节是否为数组

    if (Array.isArray(Item.book_section_list)) {
      accessType = Item.book_section_list[0].access_type;
      sparkCount = Item.book_section_list[0].spark_count;
      resourceId = Item.resource_id;
      sectionId = Item.book_section_list[0].section_id;
    } else {
      accessType = Item.access_type;
      sparkCount = Item.spark_count;
      resourceId = Item.resource_id;
      sectionId = Item.section_id;
    }

    //获取用户的详情
    const Isvip = info.is_vip;

    const sparkCountAll = info.spark_balance;
    //不要会员就可以
    if (accessType == 1) {
      PlayDirectly(resourceId, sectionId);
    }
    //会员
    if (accessType == 2) {
      if (Isvip == 2) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
    // //火花
    if (accessType == 3) {
      //不是会员火花不够
      if (Isvip == 2 && sparkCountAll < sparkCount) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      //不是会员火花够了
      if (Isvip == 2 && sparkCountAll > sparkCount) {
        //用火花进行购买
        const rea = await BuyWithSpark(resourceId, sectionId);
        if (rea.msg == "请求成功") {
          PlayDirectly(resourceId, sectionId);
        } else {
          Toast.show({
            icon: "fail",
            content: "请重试",
          });
        }
      }

      //是会员
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
  }

  function PlayDirectly(resourceId: any, sectionId: any) {
    Navigate(
      `/Detail?Resource_id=${resourceId}&Section_id=${sectionId}&Index=${isCartoon}`
    );
  }

  //切换下一页
  async function ClickFeedKey() {
    const res = await GetDataForNextPage(isCartoon!, 20, 0, feedKey);
    //保存下一页的标识
    setFeedKey(res.feed_key);
    //保存内容
    setOtherDetail(res.list);
  }
  return (
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
      {hasData == false ? (
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Skeleton.Paragraph lineCount={15} animated />
        </div>
      ) : (
        <>
          <div className="card-container">
            <div className="left">
              <div className="image">
                <img src={Item?.cover_url} alt="漫画封面" className="img" />
              </div>
            </div>
            <div className="right">
              <div className="topName">{Item?.title}</div>
              <div className="author">
                <span> 作者：</span>
                <span> {Item?.author}</span>
              </div>
              <div className="time">
                <span> 上线时间：</span>
                <span> {toYearMonthDay(Item?.release_time)}</span>
              </div>
              <div className="Label">
                {Item?.labels.map((item: any, index: any) => {
                  return (
                    <div className="LabelItem" key={index}>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="Item">
                <div className="Icon">
                  <SvgIcon name="eyes" size={12} />
                  <span> &nbsp;{Item?.total_view}</span>
                </div>
                <div className="Icon">
                  <SvgIcon name="dianzanIcon" size={12} />
                  <span> &nbsp;{Item?.total_praise}</span>
                </div>
                <div className="Icon">
                  <SvgIcon name="love" size={12} />
                  <span> &nbsp;{Item?.total_collect}</span>
                </div>
                <div className="Detail" onClick={() => Collect(Item)}>
                  {Item?.collect_status == 2 ? (
                    <SvgIcon name="dianzan" size={100} />
                  ) : (
                    <SvgIcon name="love-fill" size={100} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="DetailTitle">
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
                    <span className="Comics">目录</span>
                  </div>
                </div>
              ) : (
                <div className="common" onClick={() => ClicikType(1)}>
                  <span className="Comics">目录</span>
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
                    <span className="Comics">详情</span>
                  </div>
                </div>
              ) : (
                <div className="common" onClick={() => ClicikType(2)}>
                  <span className="Comics">详情</span>
                </div>
              )}
            </div>
            <div className="content">
              {isDetail == 1 && (
                <div className="type">
                  <Swiper
                    autoplay={false}
                    slideSize={20} // 根据视觉效果调整，保证两边有间隔
                    trackOffset={10} // 两边的间隔
                    indicator={() => null}
                    className="ul"
                  >
                    {SwiperArray.map((item: any, index: number) => {
                      return (
                        <Swiper.Item
                          key={index}
                          onClick={() => ClickIndex(index)}
                        >
                          <li
                            className={`list ${
                              Index === index ? "active" : ""
                            }`}
                          >
                            {item.access_type == 2 && (
                              <div className="vip">
                                <SvgIcon name="VIPDetail" size={24} />
                              </div>
                            )}
                            {item.access_type == 3 && (
                              <div className="vipA">
                                <SvgIcon name="detailNumber" size={30} />
                                <span className="a">2</span>
                              </div>
                            )}
                            <span className="title">{index}</span>
                          </li>
                        </Swiper.Item>
                      );
                    })}
                  </Swiper>
                </div>
              )}
            </div>
            <NavBar left="猜你喜欢" onClickA={ClickFeedKey} />
            <div className="Content">
              {OtherDetail.map((item: any, index: number) => {
                return (
                  <NovelsAndComics
                    key={index}
                    item={item}
                    isCartoon={isCartoon}
                  />
                );
              })}
            </div>
          </div>
          <div className="Bottom">
            <div className="Icon" onClick={() => ClickPlay(Item)}>
              <PlayOutline fontSize={28} />
            </div>
          </div>
        </>
      )}
    </NovelAndComicDetailsWrapper>
  );
};

const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(NovelAndComicDetails)));
