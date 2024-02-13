import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import SpecialOfferWrapper from "./styled";
// import SvgIcon from "../SvgIcon";
import VipInfo from "../../view/VipInfo";

interface IProps {
  children?: ReactNode;
}

const SpecialOffer: FC<IProps> = () => {
  return (
    <SpecialOfferWrapper>
      <div className="Content">
        <div className="image">
          <img
            src="	https://www.cooer.cc/uploads/arctimg/20230418/1681794794781..jpg"
            alt=""
            className="img"
          />
        </div>
        <div className="Name">
          <span>我的名字</span>
        </div>
        <div className="NameA">
          <span>火花:</span>
          <span>48</span>
        </div>
      </div>
      <div className="Vip">
        <div className="ContainAA">
          {/* <SvgIcon name="title" width={400} height={100} /> */}
          <div className="TitleContent">
            <div className="left">
              <span className="active">升级会员</span>
            </div>
            <div className="right">
              <span className="active">购买火花</span>
            </div>
          </div>
        </div>
        <div className="ContentA">
          <VipInfo />
          <VipInfo />
          <VipInfo />
          <VipInfo />
        </div>
      </div>
    </SpecialOfferWrapper>
  );
};

export default memo(SpecialOffer);
