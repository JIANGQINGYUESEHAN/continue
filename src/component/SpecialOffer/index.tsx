/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import SpecialOfferWrapper from "./styled";
// import SvgIcon from "../SvgIcon";
import VipInfo from "../../view/VipInfo";
import action from "../../store/action";
import { connect } from "react-redux";
import SvgIcon from "../SvgIcon";
import FireCard from "../../view/FireCard";
import {
  GetPaymentInformation,
  ProductList,
  SparkProductList,
} from "../../service/static/common";
import { Skeleton } from "antd-mobile";
import { motion } from "framer-motion";

interface IProps {
  children?: ReactNode;
  info?: any;
}

const SpecialOffer: FC<IProps> = (props) => {
  const { info } = props;
  const [VipList, setVipList] = useState<any>([]);
  const [SparkList, setSparkList] = useState<any>([]);
  const [IsVip, SetIsVip] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    (async () => {
      const rea = await SparkProductList();
      const res = await ProductList();

      setVipList(res.data.list);
      setSparkList(rea.data.list);
    })();
  }, []);
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  //点击购买
  async function trade(action: string) {
    let item;
    //先判断是购买会员还是购买火花
    if (IsVip) {
      //购买会员
      item = VipList[activeIndex].product_id;
    } else {
      //购买火花
      //购买哪一个
      item = SparkList[activeIndex].product_id;
    }
    //哪种方式购买
    const res = await GetPaymentInformation(action, item);

    if (res.msg == "请求成功") {
      console.log("其他处理");
    }
    // if (action == '0') {
    //   //支付宝购买

    // }
    // if (action == '1') {
    //   //支付宝购买
    // }
  }

  const variants = {
    enter: (direction: any) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  // 切换方向
  const swipe = IsVip ? -1 : 1;
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
          <span>{info.nickname}</span>
        </div>
        <div className="NameA">
          <span>火花:</span>
          <span>{info.spark_balance}</span>
        </div>
      </div>
      <div className="change">
        <SvgIcon name="register" width={400} height={80} />
      </div>
      <div className="repeat">
        <div
          className="left"
          onClick={() => {
            SetIsVip(1);
          }}
        >
          <span>会员购买</span>
          {IsVip == 1 && <span className="active"></span>}
        </div>
        <div
          className="right"
          onClick={() => {
            SetIsVip(2);
          }}
        >
          <span>火花购买</span>
          {IsVip == 2 && <span className="active"></span>}
        </div>
      </div>
      <motion.div
        key={IsVip}
        custom={swipe}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        style={{ width: "100%" }}
      >
        <div className="Vip">
          {IsVip ? (
            VipList.length === 0 ? (
              <Skeleton.Paragraph lineCount={5} animated />
            ) : (
              <div className="ContentA">
                {VipList.map((item: any, index: any) => (
                  <VipInfo
                    key={index}
                    Index={index}
                    isActive={activeIndex === index}
                    onClick={() => handleCardClick(index)}
                    item={item}
                  />
                ))}
              </div>
            )
          ) : SparkList.length == 0 ? (
            <Skeleton.Paragraph lineCount={5} animated />
          ) : (
            <div className="ContentA">
              {SparkList.map((item: any, index: any) => (
                <FireCard
                  key={index}
                  item={item}
                  Index={index}
                  isActive={activeIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <div className="trade">
        <div className="left" onClick={() => trade("0")}>
          <div className="name">
            <SvgIcon name="zhifubao" width={200} height={240} />
          </div>
        </div>
        <div className="right" onClick={() => trade("1")}>
          <div className="name">
            <SvgIcon name="weixin" width={200} height={240} />
          </div>
        </div>
      </div>
    </SpecialOfferWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;
export default connect(mapStateToProps, mapDispatchToProps)(memo(SpecialOffer));
