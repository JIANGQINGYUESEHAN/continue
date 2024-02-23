/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import type { FC, ReactNode } from "react";

import SvgIcon from "../../component/SvgIcon";
import { EyeFill } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import VideoItemAWrapper from "./styled";

interface IProps {
  children?: ReactNode;
  item?: any;
  isCartoon?: number;
}

const VideoItemA: FC<IProps> = ({ item, isCartoon }) => {
  const navigate = useNavigate();
  return (
    <VideoItemAWrapper>
      <div
        className="product-item"
        onClick={() => {
          navigate(
            `/videoDetail?isCartoon=${isCartoon}&resource_id=${item.resource_id}`
          );
        }}
      >
        <div className="product-image">
          <img src={item.cover_url} alt="" className="image" />
        </div>
        <div className="ItemVip">
          {item.access_type == 2 && <SvgIcon name="vip" size={30} />}
        </div>

        <div className="ItemComputed">
          {item.serial_status == 1 ? (
            <SvgIcon name="computed" size={30} />
          ) : (
            <SvgIcon name="linzai" size={30} />
          )}
        </div>

        <div className="ItemFire">
          {item.access_type == 3 && (
            <>
              <SvgIcon name="fire" size={34} />
              <span className="ItemNum">{item?.spark_count}</span>
            </>
          )}
        </div>
        <div className="ItemInfo">
          <div className="ItemName">{item.title}</div>
          <div className="VisitNum">
            <span>
              <EyeFill /> {item.view_count}
            </span>
          </div>
        </div>
      </div>
    </VideoItemAWrapper>
  );
};

export default memo(VideoItemA);
