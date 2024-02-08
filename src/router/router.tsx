/* eslint-disable @typescript-eslint/no-unused-vars */

import { lazy } from "react";
import { Navigate } from "react-router-dom";

const routers = [
  //重定向
  {
    path: "/",
    name: "Redirect",
    component: () => <Navigate to="/home" />,
  },
  //动漫
  {
    path: "/home",
    name: "Comics",
    component: lazy(() => {
      return import("../component/Comics");
    }),
    meta: {
      title: "动漫",
    },
  },
  //视频
  {
    path: "/video",
    name: "Video",
    component: lazy(() => {
      return import("../component/video");
    }),
    meta: {
      title: "视频",
    },
  },
  //小说
  {
    path: "/novel",
    name: "Novel",
    component: lazy(() => {
      return import("../component/Novel");
    }),
    meta: {
      title: "小说",
    },
  },
  //短视频
  {
    path: "/ShortVideo",
    name: "ShortVideo",
    component: lazy(() => {
      return import("../component/ShortVideo");
    }),
    meta: {
      title: "短视频",
    },
  },
  //用户
  {
    path: "/user",
    name: "User",
    component: lazy(() => {
      return import("../component/User");
    }),
    meta: {
      title: "用户",
    },
  },
  {
    path: "/rank",
    name: "Rank",
    component: lazy(() => {
      return import("../component/Rank");
    }),
    meta: {
      title: "排名",
    },
  },
  {
    path: "/classification",
    name: "Classification",
    component: lazy(() => {
      return import("../component/Classification");
    }),
    meta: {
      title: "分类",
    },
  },
  {
    path: "/specialOffer",
    name: "SpecialOffer",
    component: lazy(() => {
      return import("../component/SpecialOffer");
    }),
    meta: {
      title: "特惠",
    },
  },
  {
    path: "/apppdownload",
    name: "AppDownload",
    component: lazy(() => {
      return import("../component/AppDownload");
    }),
    meta: {
      title: "app下载",
    },
  },
];

export default routers;
