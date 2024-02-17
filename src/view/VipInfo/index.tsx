/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VipInfoWrapper from "./styled";

interface IProps {
  children?: ReactNode;
  isActive: boolean;
  Index: number;
  onClick: any;
  item: any;
}

const VipInfo: FC<IProps> = ({ isActive, Index, onClick, item }) => {
  return (
    <VipInfoWrapper>
      <div
        onClick={() => onClick(Index)}
        className={isActive == true ? `vip-card active` : "vip-card"}
      >
        <div className="vip-title">{item.title}</div>
        <div className="vip-price">
          <span className="current-price">￥{item!.discount_price}</span>
          <span className="original-price">￥{item.strike_price}</span>
          <span className="first"> 首购价格:￥{item.first_price}</span>
        </div>
        <div className="vip-benefits"> 送{item.gift_spark_count}火花 </div>
      </div>
    </VipInfoWrapper>
  );
};

export default memo(VipInfo);
