import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import FilterCriteriaWrapper from "./styled";
import NavBar from "../../view/NavBar";
import SvgIcon from "../SvgIcon";
import Chapter from "../../view/Chapter";

interface IProps {
  children?: ReactNode;
}

const FilterCriteria: FC<IProps> = () => {
  const [isDetail, SetisDetail] = useState(1);
  function ClicikType(index: number) {
    SetisDetail(index);
  }
  const [isCartoon, SetIsCarToon] = useState<number>(1);
  function ClicikTypeA(index: number) {
    SetIsCarToon(index);
  }
  return (
    <FilterCriteriaWrapper>
      <NavBar IsShowChildren={false} middle="条件" />
      <div className="Select">
        {isDetail == 1 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
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

        {isDetail == 2 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
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
        {isDetail == 3 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">视频</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(3)}>
            <span className="Comics">视频</span>
          </div>
        )}

        {isDetail == 4 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">黑料</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(4)}>
            <span className="Comics">黑料</span>
          </div>
        )}

        {isDetail == 5 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="start" size={60} />
            </div>
            <div className="ContentIconPath">
              <SvgIcon name="path" size={60} color="red" />
            </div>
            <div className="ContentTitle">
              <span className="Comics">小说</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikType(5)}>
            <span className="Comics">小说</span>
          </div>
        )}
      </div>
      <Chapter />
      <div className="SelectAA">
        {isCartoon == 1 ? (
          <div className="common" onClick={() => ClicikTypeA(2)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={35} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">漫画</span>
            </div>
          </div>
        ) : (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <span className="Comics">漫画</span>
          </div>
        )}

        {isCartoon == 2 ? (
          <div className="common" onClick={() => ClicikTypeA(1)}>
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={35} />
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
    </FilterCriteriaWrapper>
  );
};

export default memo(FilterCriteria);
