/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import SvgIcon from "../../component/SvgIcon/index";
import { EyeFill } from "antd-mobile-icons";
import NovelsWrapper from "./styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  item?: any;
  isCartoon?: number;
}

const NovelsAndComics: FC<IProps> = ({ item, isCartoon }) => {
  const navigate = useNavigate();
  return (
    <NovelsWrapper>
      <div
        className="product-item"
        onClick={() => {
          navigate(
            `/NovelAndComicDetail?isCartoon=${isCartoon}&resource_id=${item?.resource_id}`
          );
        }}
      >
        <div className="product-image">
          <img src={item?.cover_url} alt="" className="image" />
        </div>
        {item.access_type == 2 && (
          <div className="ItemVip">
            <SvgIcon name="vip" size={30} />
          </div>
        )}

        <div className="ItemComputed">
          {item.serial_status == 1 ? (
            <SvgIcon name="computed" size={30} />
          ) : (
            <SvgIcon name="linzai" size={30} />
          )}
        </div>
        {item.access_type == 3 && (
          <div className="ItemFire">
            <SvgIcon name="fire" size={34} />
            <span className="ItemNum">{item?.spark_count}</span>
          </div>
        )}

        <div className="ItemInfo">
          <div className="ItemName">{item?.title}</div>
          <div className="VisitNum">
            <span>
              <EyeFill /> {item?.view_count}
            </span>
          </div>
        </div>
      </div>
    </NovelsWrapper>
  );
};

export default memo(NovelsAndComics);
