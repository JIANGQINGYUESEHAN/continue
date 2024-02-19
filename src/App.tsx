/* eslint-disable react-refresh/only-export-components */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { RouterContent } from "./router";
import { HashRouter } from "react-router-dom";
import AppWrapper from "./styled";
import BottomNavigation from "./component/BottomNavigation";

import { connect, useDispatch } from "react-redux";
import action from "./store/action";
import { getBaseInfo } from "./service/static/common";
import BaseAction from "./store/action/BaseAction";

interface IProps {
  children?: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
const App: FC<IProps> = (props) => {
  let Dispatch = useDispatch();
  //初始化用户信息
  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("KpToken");

      if (!token) {
        const res = await getBaseInfo();
        // if (res.msg !== "请求成功") {
        //   console.log("检查网络");
        // }
        //token存在之后 进行存储
        const token = res!.data.token;

        const secret = res!.data.secret;

        //先清除原有的token
        localStorage.removeItem("KpToken");
        //清除原有的secret
        localStorage.removeItem("secret");
        //存储secret
        console.log(3333333);

        localStorage.setItem("secret", secret);
        //存储token
        localStorage.setItem("KpToken", token);
        //然后进行获取用户基本信息
      }
      let rea = await BaseAction.queryUserInfoAsyncAction();
      Dispatch(rea);
      //请求轮播图
      let rec = await BaseAction.queryCarouselData();

      Dispatch(rec);
      //请求公告
      Dispatch(await BaseAction.queryAnnouncements());
    })();
  }, []);
  // console.log(props);

  return (
    <AppWrapper>
      <HashRouter>
        <RouterContent />
        <BottomNavigation />
      </HashRouter>
    </AppWrapper>
  );
};

const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
