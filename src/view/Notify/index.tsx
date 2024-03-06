/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import type { FC, ReactNode } from "react";
import NotifyWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import action from "../../store/action";
import { connect } from "react-redux";

interface IProps {
  children?: ReactNode;
  InfoList?: string;
}

const Notify: FC<IProps> = ({ InfoList }) => {
  // console.log(InfoList);

  return (
    <NotifyWrapper>
      <div className="news">
        <div className="left">
          <div className="icon">
            <SvgIcon name="sound" size={25} />
          </div>
          <div className="border"></div>
        </div>
        <div className="right">
          <div className="right">
            <span className="new"> {InfoList}</span>
          </div>
        </div>
      </div>
    </NotifyWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(Notify));
