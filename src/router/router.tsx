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
  //NovelAndComicDetailsWrapper
  {
    path: "/NovelAndComicDetail",
    name: "NovelAndComicDetail",
    component: lazy(() => {
      return import("../component/NovelAndComicDetails");
    }),
    meta: {
      title: "详情页",
    },
  },
  {
    path: "/info",
    name: "info",
    component: lazy(() => {
      return import("../component/Info");
    }),
    meta: {
      title: "消息页",
    },
  },
  {
    path: "/collect",
    name: "collect",
    component: lazy(() => {
      return import("../component/Collect");
    }),
    meta: {
      title: "收藏页",
    },
  },
  {
    path: "/friend",
    name: "friend",
    component: lazy(() => {
      return import("../component/Friend");
    }),
    meta: {
      title: "邀请盆友",
    },
  },
  {
    path: "/bindPhone",
    name: "bindPhone",
    component: lazy(() => {
      return import("../component/BindPhone");
    }),
    meta: {
      title: "绑定手机",
    },
  },
  {
    path: "/set",
    name: "set",
    component: lazy(() => {
      return import("../component/Set");
    }),
    meta: {
      title: "绑定手机",
    },
  },
  //FilterCriteria
  {
    path: "/FilterCriteria",
    name: "FilterCriteria",
    component: lazy(() => {
      return import("../component/FilterCriteria");
    }),
    meta: {
      title: "删选条件",
    },
  },
  {
    path: "/videoDetail",
    name: "videoDetail",
    component: lazy(() => {
      return import("../component/VideoDetail");
    }),
    meta: {
      title: "删选条件",
    },
  },
  {
    path: "/history",
    name: "History",
    component: lazy(() => {
      return import("../component/History");
    }),
    meta: {
      title: "删选条件",
    },
  },
  {
    path: "/fixpassword",
    name: "fixpassword",
    component: lazy(() => {
      return import("../component/FixPassword");
    }),
    meta: {
      title: "修改密码",
    },
  },
  {
    path: "/fixperson",
    name: "fixperson",
    component: lazy(() => {
      return import("../component/FixPerson");
    }),
    meta: {
      title: "修改用户信息",
    },
  },
  {
    path: "/loginPassword",
    name: "loginPassword",
    component: lazy(() => {
      return import("../component/LoginByPassword");
    }),
    meta: {
      title: "密码登录",
    },
  },

  {
    path: "/detail",
    name: "detail",
    component: lazy(() => {
      return import("../component/Detail");
    }),
    meta: {
      title: "小说和详情",
    },
  },
];

export default routers;
