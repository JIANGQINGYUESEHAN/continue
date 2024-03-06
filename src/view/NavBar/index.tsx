/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import type { FC, ReactNode } from "react";
import NavbarWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import { LeftOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import right from "../../assets/svg/right.svg";
import flash from "../../assets/svg/flash.svg";
interface IProps {
  children?: ReactNode;
  IsShowChildren?: boolean;
  left?: string;
  middle?: string;
  onClickA?: any;
  isCartoon?: any;
}

const NavBar: FC<IProps> = ({
  IsShowChildren = true,
  left = "左边",
  middle = "中间类容",
  onClickA,
  isCartoon = 1,
}) => {
  const navigate = useNavigate();
  return (
    <NavbarWrapper>
      <div className="Common">
        {IsShowChildren ? (
          <>
            <div className="icon">
              <SvgIcon name="rectangle" size={24} />
            </div>
            <div className="left">
              <span>{left}</span>
            </div>

            <div className="right">
              <div className="iconCircle">
                <span onClick={onClickA}> 换一换</span>
                &nbsp;
                <img src={flash} alt="" className="imag" />
              </div>

              <div className="iconRight">
                &nbsp;
                <span
                  onClick={() => {
                    navigate(`/rank?isCartoon=${isCartoon}`);
                  }}
                >
                  更多
                </span>
                <img src={right} alt="" className="imag" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="leftIcon"
              onClick={() => {
                navigate(-1);
              }}
            >
              <LeftOutline />
            </div>

            <div className="middle">{middle}</div>
          </>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default memo(NavBar);
