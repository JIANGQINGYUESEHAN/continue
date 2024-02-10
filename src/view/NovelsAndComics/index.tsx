import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import SvgIcon from "../../component/SvgIcon/index";
import { EyeFill } from "antd-mobile-icons";
import NovelsWrapper from "./styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const NovelsAndComics: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <NovelsWrapper>
      <div
        className="product-item"
        onClick={() => {
          navigate("/NovelAndComicDetail");
        }}
      >
        <div className="product-image">
          <img
            src="https://www.cooer.cc/uploads/arctimg/20230802/1690943123276..jpg"
            alt=""
            className="image"
          />
        </div>
        <div className="ItemVip">
          <SvgIcon name="vip" size={30} />
        </div>
        <div className="ItemComputed">
          <SvgIcon name="computed" size={30} />
        </div>
        <div className="ItemFire">
          <SvgIcon name="fire" size={34} />
          <span className="ItemNum">23</span>
        </div>
        <div className="ItemInfo">
          <div className="ItemName">hahahadddddhssssssssssssssa</div>
          <div className="VisitNum">
            <span>
              <EyeFill /> 111
            </span>
          </div>
        </div>
      </div>
    </NovelsWrapper>
  );
};

export default memo(NovelsAndComics);
