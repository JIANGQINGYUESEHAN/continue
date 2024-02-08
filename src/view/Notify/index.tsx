import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import NotifyWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";

interface IProps {
  children?: ReactNode;
  Announcements?: string;
}

const Notify: FC<IProps> = ({ Announcements = "ahahahahahahah" }) => {
  return (
    <NotifyWrapper>
      <div className="news">
        <div className="left">
          <div className="icon">
            <SvgIcon name="sound" size={25} />
          </div>
        </div>
        <div className="right">
          <div className="right">
            <span className="new"> {Announcements}</span>
          </div>
        </div>
      </div>
    </NotifyWrapper>
  );
};

export default memo(Notify);
