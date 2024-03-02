/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import type { FC, ReactNode } from "react";
import FireCardWrapper from "./styled";
import king from "../../assets/img/king.png";
interface IProps {
  children?: ReactNode;
  isActive: boolean;
  Index: number;
  onClick: any;
  item: any;
}

const FireCard: FC<IProps> = ({ isActive, Index, onClick, item }) => {
  return (
    <FireCardWrapper>
      {isActive == true && (
        <div className="imag">
          <img src={king} alt="" className="img" />
        </div>
      )}
      <div
        className={isActive == true ? `coupon active` : "coupon"}
        onClick={() => onClick(Index)}
      >
        <div className="couponHeader">
          <span className="couponValue">
            <span className="discount">折扣价 </span>
            {item.discount_price}
          </span>
          <span className="couponDiscount">¥{item.strike_price}</span>
        </div>
        <div className="couponBody">
          <span className="couponDescription">
            充值送{item.gift_spark_count}火花
          </span>
        </div>
        <div className="couponBodya">
          <span className="couponDescriptiona">首充 ¥{item.first_price}</span>
        </div>
      </div>
    </FireCardWrapper>
  );
};

export default memo(FireCard);
