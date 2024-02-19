/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelAndComicDetailsWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import { Swiper, Toast } from "antd-mobile";
import NovelsAndComics from "../../view/NovelsAndComics";
import { WithRouter } from "../../router";
import {
  GetDetailsAboutNovelsAndComics,
  gethandleCollect,
} from "../../service/static/common";
import toYearMonthDay from "../../utils/time";

interface IProps {
  children?: ReactNode;
  query?: any;
}

const NovelAndComicDetails: FC<IProps> = ({ query }) => {
  const { resource_id } = query;
  const [Item, setItem] = useState<any>();
  const [isDetail, SetisDetail] = useState(1);
  const [Index, setIndex] = useState(0);

  const [SwiperArray, setSwiperArray] = useState([]);
  function ClicikType(index: number) {
    SetisDetail(index);
  }

  //点击
  function ClickIndex(index: number) {
    setIndex(index);
  }
  //收藏
  async function Collect(item: any) {
    console.log(item.collect_status);
    const resourceId = item.resource_id;
    if (item.collect_status == 2) {
      //收藏

      const res = await gethandleCollect(1, resourceId);
      console.log(res);

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
      // console.log(res);
      setItem(res);
      setSwiperArray(res.book_section_list);
    })();
  }, []);

  return (
    <NovelAndComicDetailsWrapper>
      <NavBar IsShowChildren={false} middle="详情页" />
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
                    <Swiper.Item key={index} onClick={() => ClickIndex(index)}>
                      <li className={`list ${Index === index ? "active" : ""}`}>
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
        <NavBar left="猜你喜欢" />
        <div className="Content"></div>
      </div>
    </NovelAndComicDetailsWrapper>
  );
};

export default WithRouter(memo(NovelAndComicDetails));
