import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import InfoWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

const Info: FC<IProps> = () => {
  return (
    <InfoWrapper>
      <NavBar IsShowChildren={false} middle="消息" />
      <div className="feature-list">
        <div className="feature-item">
          <div className="icon">
            <SvgIcon name="infocopy" size={25} />
          </div>
          <span className="text">ddd</span>
        </div>
      </div>
    </InfoWrapper>
  );
};

export default memo(Info);
