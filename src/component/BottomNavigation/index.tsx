/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import BottomNavigationWrapper from "./styled";

import { useLocation, useNavigate } from "react-router-dom";
import { WithRouter } from "../../router";
import SvgIcon from "../SvgIcon";

interface IProps {
  children?: ReactNode;
}

const BottomNavigation: FC<IProps> = () => {
  const navigate = useNavigate();
  // 需要显示底部导航的路径数组
  const BottomNavPaths = [
    "/home",
    "/video",
    "/novel",
    "/ShortVideo",
    "/user",
    "/more",
  ];
  //获取当前所在的路由
  const location = useLocation();
  // 检查当前路径是否需要隐藏底部导航
  const showBottomNav = BottomNavPaths.includes(location.pathname);

  const [IsShow, SetIsShow] = useState(showBottomNav);

  useEffect(() => {
    const showBottomNav = BottomNavPaths.includes(location.pathname);
    SetIsShow(showBottomNav);
  });

  //选择框
  const [Index, SetIndex] = useState(() => {
    return location.pathname;
  });

  const BorderBottomArray: any = [
    {
      id: 1,
      UnSelectIcon: <SvgIcon name="ComicsSvgBlank" size={30} />,
      SelectIcon: <SvgIcon name="Comics" size={30} />,
      path: "/home",
      name: "动漫",
    },
    {
      id: 2,
      UnSelectIcon: <SvgIcon name="MovieBlank" size={30} color="#cccc" />,
      SelectIcon: <SvgIcon name="film" size={30} />,
      path: "/video",
      name: "影片",
    },
    {
      id: 3,
      UnSelectIcon: <SvgIcon name="ShortVideo" size={50} />,
      SelectIcon: <SvgIcon name="ShortVideo" size={50} />,
      path: "/ShortVideo",
      name: "短视频",
    },
    {
      id: 4,
      UnSelectIcon: <SvgIcon name="NovelBlank" size={30} />,
      SelectIcon: <SvgIcon name="Novel" size={30} />,
      path: "/novel",
      name: "小说",
    },
    {
      id: 5,
      UnSelectIcon: <SvgIcon name="MyBlank" size={35} />,
      SelectIcon: <SvgIcon name="my" size={35} />,
      path: "/user",
      name: "用户",
    },
  ];

  return (
    <BottomNavigationWrapper>
      {IsShow && (
        <div className="bottom">
          {BorderBottomArray.map((item: any) => {
            return (
              <div
                className="selectIcon"
                key={item.id}
                onClick={() => {
                  SetIndex(item.path);
                  navigate(`${item.path}`);
                }}
              >
                {Index !== item.path ? (
                  <div className="icon">{item.UnSelectIcon}</div>
                ) : (
                  <div className="icon">{item.SelectIcon}</div>
                )}

                <div className="Name">{item.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </BottomNavigationWrapper>
  );
};

export default WithRouter(BottomNavigation);
