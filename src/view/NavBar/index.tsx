import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import NavbarWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import { LeftOutline, RedoOutline, RightOutline } from "antd-mobile-icons";

interface IProps {
  children?: ReactNode;
  IsShowChildren?: boolean;
}

const NavBar: FC<IProps> = ({ IsShowChildren = true }) => {
  return (
    <NavbarWrapper>
      <div className="Common">
        {IsShowChildren ? (
          <>
            <div className="icon">
              <SvgIcon name="rectangle" size={24} />
            </div>
            <div className="left">
              <span>左边</span>
            </div>

            <div className="right">
              <div className="iconCircle">
                <span> 换一换</span>
                <RedoOutline />
              </div>
              <div className="iconRight">
                <span> 更多</span>
                <RightOutline />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="leftIcon">
              <LeftOutline />
            </div>

            <div className="middle">中间内容</div>
          </>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default memo(NavBar);
