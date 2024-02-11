/* eslint-disable prefer-const */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import EndWrapper from "./styled";
import { Divider } from "antd-mobile";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  EndComponent?: string;
}

const End: FC<IProps> = ({ EndComponent = "没有更多了" }) => {
  let navigate = useNavigate();
  function ClickFilterCriteria() {
    navigate("/FilterCriteria");
  }
  return (
    <EndWrapper>
      <div className="button-group">
        <div className="button left-button" onClick={ClickFilterCriteria}>
          全部订单
        </div>
        <div className="button right-button">全部分类</div>
      </div>
      <div className="end">
        <div className="hint"></div>
      </div>
      <div className="last">
        <Divider>{EndComponent}</Divider>
      </div>
    </EndWrapper>
  );
};

export default memo(End);
