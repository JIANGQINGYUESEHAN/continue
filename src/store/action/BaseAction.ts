import * as TYPES from './action_type';

const BaseAction = {
    // 异步获取登录者信息,完成派发
    async queryUserInfoAsync() {

    },
    // 清除存储的登录者信息
    clearUserInfo() {
        return {
            type: TYPES.BASE_INFO,
            info: null
        };
    }
}
export default BaseAction