/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectList } from "../../service/static/common";
import SvgIcon from "../SvgIcon";
import ComicsWrapperStyled from "./styled";
import action from "../../store/action";
import { connect } from "react-redux";
import FloorComponents from "../../view/FloorComponents";
import List from "../../view/List";
import Chapter from "../../view/Chapter";
import Select from "../../view/Select";
import Notify from "../../view/Notify";
import { Swiper } from "antd-mobile";
import End from "../../view/End";
import SkeletonScreen from "../../view/SkeletonScreen";

import EveyUpdate from "../../view/EveyUpdate";
import { useNavigate } from "react-router-dom";
interface IProps {
  children?: ReactNode;
  CarouselList: any[];
}

const Comics: FC<IProps> = ({ CarouselList = [] }) => {
  const navigate = useNavigate();
  const [Project, setProjectList] = useState([]);
  const [isCartoon, SetIsCarToon] = useState<number>(1);
  const [show, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(true);
  }, [CarouselList]);
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

      setProjectList(res.list);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await ProjectList(isCartoon);

      setProjectList(res.list);
    })();
  }, [isCartoon]);
  // 定义动画变化
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
  const swipe = isCartoon ? -1 : 1;
  const handleIconClick = () => {
    console.log(111);

    // navigate(`/search?isCartoon=${isCartoon}`);
  };
  return (
    <>
      {show ? (
        <>
          <ComicsWrapperStyled>
            <motion.div
              key={isCartoon}
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
              <div className="ContentAAA">
                <div className="Select">
                  {isCartoon == 1 ? (
                    <div className="common" onClick={() => ClicikType(2)}>
                      <div className="ContentTitle">
                        <span className="Comics">漫画</span>
                      </div>
                      <div className="ContentIcon">
                        <SvgIcon name="CheckCircle" size={40} />
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
                        <SvgIcon name="CheckCircle" size={40} />
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
                <div className="SelectAA" onClick={handleIconClick}>
                  <div
                    className="ContentIconA"
                    onClick={() => {
                      navigate(`/search?isCartoon=${isCartoon}`);
                    }}
                  >
                    <SvgIcon name="selectA" size={25} />
                  </div>
                </div>
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

              <Chapter isCartoon={isCartoon}>
                <Notify />
              </Chapter>
              {/* 公告提示 */}
              {Project.map((item: any, index: number) => {
                return (
                  <EveyUpdate isCartoon={isCartoon} key={index} item={item} />
                );
              })}
              {/* <EveyUpdate isCartoon={isCartoon} /> */}
              {isCartoon == 1 ? (
                <>
                  <List isCartoon={isCartoon} />
                  {Project.map((item: any, index: number) => {
                    return (
                      <FloorComponents
                        isCartoon={isCartoon}
                        key={index}
                        item={item}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  <List isCartoon={isCartoon} />
                  {Project.map((item: any, index: number) => {
                    return (
                      <FloorComponents
                        isCartoon={isCartoon}
                        key={index}
                        item={item}
                      />
                    );
                  })}
                </>
              )}

              <End isCartoon={isCartoon} />
            </motion.div>
          </ComicsWrapperStyled>
        </>
      ) : (
        <>
          <SkeletonScreen />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(Comics));
