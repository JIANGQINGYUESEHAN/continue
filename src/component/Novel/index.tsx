/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelWrapper from "./styled";

import { ProjectList } from "../../service/static/common";
import { Swiper } from "antd-mobile";
import { connect } from "react-redux";
import action from "../../store/action";
import Select from "../../view/Select";

import Notify from "../../view/Notify";
import List from "../../view/List";
import FloorComponents from "../../view/FloorComponents";
import End from "../../view/End";
import CategoryListAllNovelA from "../../view/CategoryListAllNovelA";

interface IProps {
  children?: ReactNode;
  CarouselList?: any;
}

const Novel: FC<IProps> = ({ CarouselList }) => {
  const [isCartoon] = useState<number>(5);

  const [CategoryListAllNovel, setCategoryListAllNovel] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const rea = await ProjectList(5);

      setCategoryListAllNovel(rea.list);
    })();
  }, []);

  return (
    <NovelWrapper>
      <CategoryListAllNovelA>
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
        <Select isCartoon={isCartoon} />
        <Notify />
      </CategoryListAllNovelA>

      <List isCartoon={isCartoon} />
      {CategoryListAllNovel.map((item: any, index: number) => {
        return (
          <FloorComponents isCartoon={isCartoon} key={index} item={item} />
        );
      })}
      <End isCartoon={isCartoon} />
    </NovelWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(Novel));
