/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import RankItemWrapper from "./styled";
import { useNavigate } from "react-router-dom";
import {
  GetDetailsAboutNovelsAndComics,
  gethandleCollect,
} from "../../service/static/common";
import { Toast } from "antd-mobile";

interface IProps {
  children?: ReactNode;
  isCartoon: number;
  item?: any;
}

const RankItem: FC<IProps> = ({ isCartoon, item }) => {
  const [labels, setLabels] = useState<any>();
  const [detail, setDetail] = useState<any>();
  useEffect(() => {
    (async () => {
      if (isCartoon == 1 || isCartoon == 5) {
        const res = await GetDetailsAboutNovelsAndComics(item.resource_id);

        setDetail(res);
        if (res.labels.length !== 0) {
          setLabels(res.labels[0]);
        }
      }
    })();
  }, []);
  //收藏
  async function Collect(item: any) {
    const resourceId = detail.resource_id;
    console.log(resourceId);

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
    setDetail(res);
  }
  const navigate = useNavigate();
  return (
    <RankItemWrapper>
      <div className="content">
        <div
          className="image"
          onClick={() => {
            navigate(
              `/NovelAndComicDetail?isCartoon=${isCartoon}&resource_id=${item.resource_id}`
            );
          }}
        >
          <img src={detail?.cover_url} alt="" className="img" />
          <div className="over">
            <span> 已完结</span>
          </div>
        </div>
        <div className="middle">
          <div className="ItemName">{detail?.title}</div>
          <div className="Label">
            <div className="LabelItem">
              <span>{labels?.label}</span>
            </div>
            <div className="LabelItemA">
              <span>年度热播</span>
            </div>
          </div>
          <div className="collect">
            <div className="LabelItem" onClick={Collect}>
              {detail?.collect_status == 2 && <span>收藏</span>}
              {detail?.collect_status == 1 && <span>已收藏</span>}
            </div>
          </div>
        </div>
      </div>
    </RankItemWrapper>
  );
};

export default memo(RankItem);
