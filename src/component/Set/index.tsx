import { memo } from "react";
import type { FC, ReactNode } from "react";
import SetWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import NavBar from "../../view/NavBar";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Set: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <SetWrapper>
      <NavBar IsShowChildren={false} middle="设置" />

      <div
        className="feature-list"
        onClick={() => {
          navigate("/fixpassword");
        }}
      >
        <div className="feature-item">
          <div className="icon">
            <SvgIcon name="password" size={25} />
          </div>
          <span className="text">修改密码</span>
        </div>
        <div className="right">
          <div className="icon">
            <SvgIcon name="left" size={20} />
          </div>
        </div>
      </div>
      <div
        className="feature-list"
        onClick={() => {
          navigate("/fixperson");
        }}
      >
        <div className="feature-item">
          <div className="icon">
            <SvgIcon name="person" size={25} />
          </div>
          <span className="text">修改用户信息</span>
        </div>
        <div className="right">
          <div className="icon">
            <SvgIcon name="left" size={20} />
          </div>
        </div>
      </div>
    </SetWrapper>
  );
};

export default memo(Set);
