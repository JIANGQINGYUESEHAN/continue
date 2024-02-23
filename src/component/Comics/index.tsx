/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import ComicsWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { Swiper } from "antd-mobile";
import Select from "../../view/Select";
import Chapter from "../../view/Chapter";
import Notify from "../../view/Notify";

import End from "../../view/End";
import List from "../../view/List";
import FloorComponents from "../../view/FloorComponents";
import action from "../../store/action";
import { connect } from "react-redux";
import { ProjectList } from "../../service/static/common";

interface IProps {
  children?: ReactNode;
  CarouselList?: any;
}

const Comics: FC<IProps> = ({ CarouselList }) => {
  const [Project, setProjectList] = useState([]);
  const [isCartoon, SetIsCarToon] = useState<number>(1);
  function ClicikType(index: number) {
    SetIsCarToon(index);
    (async () => {
      const res = await ProjectList(isCartoon);
      // console.log(res);
      setProjectList(res.list);
    })();
  }
  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);
      console.log(res.list);
      setProjectList(res.list);
    })();
  }, []);
  return (
    <ComicsWrapper>
      {/* 漫画和动漫的切换 */}
      <div className="Select">
        {isCartoon == 1 ? (
          <div className="common" onClick={() => ClicikType(2)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
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

        {isCartoon == 2 ? (
          <div className="common" onClick={() => ClicikType(1)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={55} />
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
      </div>
      {/* 轮播图 */}
      <div className="carousel">
        <Swiper className="Swiper" loop autoplay>
          {CarouselList?.map((color: any, index: number) => (
            <Swiper.Item key={index}>
              <div className="Swiper" style={{ background: color }}>
                <img src={color.img_url} alt="" className="imag" />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      {/* 四选择项 */}
      <Select isCartoon={isCartoon} />
      {/* 多重选择 */}
      <Chapter />
      {/* 公告提示 */}
      <Notify />
      {isCartoon == 1 ? (
        <>
          <List isCartoon={isCartoon} />
          {Project.map((item: any, index: number) => {
            return (
              <FloorComponents isCartoon={isCartoon} key={index} item={item} />
            );
          })}
        </>
      ) : (
        <>
          <List isCartoon={isCartoon} />
          {Project.map((item: any, index: number) => {
            return (
              <FloorComponents isCartoon={isCartoon} key={index} item={item} />
            );
          })}
        </>
      )}

      <End isCartoon={isCartoon} />
    </ComicsWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(Comics));
