import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import SvgIcon from "../SvgIcon";
import CollectWrapper from "./styled";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

const Collect: FC<IProps> = () => {
  const [isDetail, SetisDetail] = useState(1);
  function ClicikType(index: number) {
    SetisDetail(index);
  }
  return (
    <CollectWrapper>
      <NavBar IsShowChildren={false} middle="收藏" />
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
    </CollectWrapper>
  );
};

export default memo(Collect);
