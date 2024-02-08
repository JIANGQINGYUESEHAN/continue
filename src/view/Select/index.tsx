/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import SelectWrapper from "./styled";
import SvgIcon from "../../component/SvgIcon";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Select: FC<IProps> = () => {
  const navigate = useNavigate();
  const BorderBottomArray: any = [
    {
      id: 1,
      SelectIcon: <SvgIcon name="rank" size={35} />,
      path: "/rank",
      name: "排名",
    },
    {
      id: 2,
      SelectIcon: <SvgIcon name="classificon" size={35} />,
      path: "/classification",
      name: "影片",
    },
    {
      id: 3,
      SelectIcon: <SvgIcon name="price" size={35} />,
      path: "/specialOffer",
      name: "特惠",
    },
    {
      id: 4,
      SelectIcon: <SvgIcon name="download" size={35} />,
      path: "/apppdownload",
      name: "app",
    },
  ];
  return (
    <SelectWrapper>
      <div className="bottom">
        {BorderBottomArray.map((item: any, index: any) => {
          return (
            <div
              className="selectIcon"
              key={item.id}
              onClick={() => {
                navigate(`${item.path}`);
              }}
            >
              <div className="icon">{item.SelectIcon}</div>
              <div className="Name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </SelectWrapper>
  );
};

export default memo(Select);
