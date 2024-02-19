/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GetAnnouncements,
  GetCarouselImage,
  getBaesInfo,
} from "../../service/static/common";
import * as TYPES from "./action_type";

const BaseAction = {
  // 异步获取登录者信息,完成派发
  async queryUserInfoAsyncAction() {
    const res = await getBaesInfo();

    // console.log(res);

    return {
      type: TYPES.BASE_INFO,
      info: res.data,
    };
  },
  //请求轮播图，完成派发
  async queryCarouselData() {
    const res = await GetCarouselImage();

    return {
      type: TYPES.IMAG_LIST,
      CarouselList: res.data.item_list,
    };
  },
  // 获取公告 ，完成派发
  async queryAnnouncements() {
    let res = await GetAnnouncements();
    // console.log(res.data.list);
    res = res.data.list
      .map((item: any) => item.content)
      .join("                               ");
    return {
      type: TYPES.INFO_LIST,
      InfoList: res,
    };
  },
};

export default BaseAction;
