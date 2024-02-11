import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VideoItemWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import { EyeFill } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const VideoItem: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <VideoItemWrapper>
      <div
        className="videoItem"
        onClick={() => {
          navigate("/videoDetail");
        }}
      >
        <div className="videoImag">
          <div className="video">
            <img
              src="http://zy.img.qiuyue.space/QQ图片20230516221819.jpg"
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
        </div>
        <div className="ItemInfo">
          <div className="ItemName">水水水水水水水水水水水水水</div>
          <div className="VisitNum">
            <span>
              <EyeFill /> 111
            </span>
          </div>
        </div>
      </div>
    </VideoItemWrapper>
  );
};

export default memo(VideoItem);
