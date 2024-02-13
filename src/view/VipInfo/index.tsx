import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VipInfoWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const VipInfo: FC<IProps> = () => {
  return (
    <VipInfoWrapper>
      <div className="vip-card">
        <div className="vip-title">哈哈哈</div>
        <div className="vip-price">
          <span className="current-price">￥2</span>
          <span className="original-price">￥e</span>
          <span className="first"> 首购价格:￥の3</span>
        </div>
        <div className="vip-benefits"> 送1蜜币 </div>
      </div>
    </VipInfoWrapper>
  );
};

export default memo(VipInfo);
