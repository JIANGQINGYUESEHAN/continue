import { getBaesInfo } from "../../service/static/common";
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
  // 清除存储的登录者信息
  clearUserInfo() {},
};
export default BaseAction;
