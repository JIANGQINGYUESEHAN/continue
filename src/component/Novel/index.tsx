/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { ProjectList } from "../../service/static/common";
import { Skeleton, Swiper } from "antd-mobile";
import { connect } from "react-redux";
import action from "../../store/action";
import Select from "../../view/Select";
import Chapter from "../../view/Chapter";
import Notify from "../../view/Notify";
import List from "../../view/List";
import FloorComponents from "../../view/FloorComponents";
import End from "../../view/End";

interface IProps {
  children?: ReactNode;
  CarouselList?: any;
}

const Novel: FC<IProps> = ({ CarouselList }) => {
  const [isCartoon] = useState<number>(5);
  const [isNovelCategoryIndex, SetIsNovelCategoryIndex] = useState<number>(0);
  const [CategoryListAllNovel, setCategoryListAllNovel] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const rea = await ProjectList(5);
      // console.log(rea);
      //title
      setCategoryListAllNovel(rea.list);
    })();
  }, []);

  //点击切换
  function ClickChange(index: number) {
    // console.log(index);
    SetIsNovelCategoryIndex(index);
  }

  return (
    <NovelWrapper>
      {CategoryListAllNovel.length == 0 ? (
        <div
          style={{
            width: "100%",
            height: "20px",
          }}
        >
          <Skeleton.Paragraph lineCount={1} animated />
        </div>
      ) : (
        <>
          <div className="Select">
            {CategoryListAllNovel.map((category: any, index: number) => {
              return (
                <div
                  className="common"
                  key={index}
                  onClick={() => ClickChange(index)}
                >
                  {isNovelCategoryIndex == index ? (
                    <>
                      <div className="ContentIcon">
                        <SvgIcon name="CheckCircle" size={35} />
                      </div>
                      <div className="ContentTitle">
                        <span className="Comics">{category.title}</span>
                      </div>
                    </>
                  ) : (
                    <span className="Comics">{category.title}</span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
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
      {/* 多重选择 */}
      <Chapter />
      {/* 公告提示 */}
      <Notify />
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
