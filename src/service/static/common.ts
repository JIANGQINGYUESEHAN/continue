/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import hyRequest from "..";
import CryptoJSA from "../../utils/crypto";

//注册非正式用户
export function getBaseInfo() {
  return hyRequest.post({
    url: "/api/v1/auth/init",
  });
}
//获取非正式用户的信息 存储到store中
export function getBaesInfo() {
  return hyRequest.get({
    url: "/api/v1/userinfo/me",
  });
}
//获取验证码
export async function getVerificationCodeBind(receiver: string) {
  const data = {
    scene: 3,
    area_code: 86,
    receiver: `${receiver}`,
  };

  const res = await hyRequest.post({
    url: "/api/v1/auth/sendCode",
    data,
  });
  console.log(res);

  return res;
}

//绑定手机号码
export async function BindMobilePhoneNumberCode(
  code: string,
  new_password: string,
  phone: string
) {
  const data = {
    code,
    area_code: 86,
    new_password,
    phone,
  };

  const res = await hyRequest.post({
    url: "/api/v1/auth/setPhone",
    data,
  });

  return res;
}
//账号密码登录
export async function LoginWithAccountAndPassword(
  username: string,
  password: string
) {
  const data = {
    password,
    auth_type: 1,
    login_account: username,
  };
  const res = await hyRequest.post({
    url: "/api/v1/auth/login",
    data,
  });
  return res;
}
//验证码登录时发送验证码
export async function getVerificationCode(receiver: string) {
  const data = {
    scene: 4,
    area_code: 86,
    receiver,
  };
  const res = await hyRequest.post({
    url: "/api/v1/auth/login",
    data,
  });
  return res;
}

//验证码登录
export async function VerificationCodeLogin(
  username: string,
  password: string
) {
  const data = {
    password,
    auth_type: 3,
    login_account: username,
    area_code: 86,
  };
  const res = await hyRequest.post({
    url: "/api/v1/auth/login",
    data,
  });
  return res;
}

//修改密码
export async function changePassword(newPassword: string, OldPassword: string) {
  const data = {
    new_password: newPassword,
    old_password: OldPassword,
  };
  const res = await hyRequest.post({
    url: "/api/v1/auth/resetPwd",
    data,
  });

  return res;
}
//用户头像列表
export async function AvatarList() {
  const res = await hyRequest.get({
    url: "/api/v1/common/headPortraitList",
  });
  return res;
}
//修改用户信息
export async function ModifyUerInformation(
  nickname: string,
  sex: any,
  head_portrait_id: string
) {
  const data = {
    nickname,
    sex: sex * 1,
    head_portrait_id,
  };

  const res = await hyRequest.post({
    url: "/api/v1/userinfo/updateBaseInfo",
    data,
  });
  return res;
}
//获取历史信息
export async function GetHistoricalInformation(
  navigationType: number,
  feedSize: number,
  feedKey: string = ""
) {
  let b = navigationType * 1;
  // console.log(typeof b);
  let res = await hyRequest.get({
    url: `/api/v1/history/list?navigation_type=${b}&feed_size=${feedSize}&feed_key=${feedKey}`,
  });

  res = CryptoJSA(res.data);
  return res;
}

//获取消息
export async function GetUserNews() {
  const res = await hyRequest.get({
    url: "/api/v1/common/msgbox/list",
  });

  return res.data;
}
//收藏列表
export async function GetCollectList(
  navigation_type: number,
  feed_size: number,
  feedKey: string = ""
) {
  let res = await hyRequest.get({
    url: `/api/v1/collect/list?navigation_type=${navigation_type}&feed_size=${feed_size}&feed_key=${feedKey}`,
  });
  console.log(res);

  let a = CryptoJSA(res.data);
  return a;
}

//获取邀请码
export async function GetInvitationCode() {
  const res = await hyRequest.get({
    url: "/api/v1/activity/inviteCode",
  });
  return res;
}

//获取 火花 列表

export async function SparkProductList() {
  const res = await hyRequest.get({ url: "/api/v1/product/sparkList" });

  return res;
}
//获取 vip 列表
export async function ProductList() {
  const res = await hyRequest.get({
    url: "/api/v1/product/vipList",
  });

  return res;
}
//支付
export async function GetPaymentInformation(
  product_id: string,
  payment_source: number
) {
  let data = {
    product_id,
    payment_source,
  };
  let res = await hyRequest.post({
    url: "/api/v1/trade/order",
    data,
  });
  return res;
}

//获取签到记录
export async function getSignInRecord() {
  const res = await hyRequest.get({
    url: "/api/v1/activity/punchRecord",
  });

  return res;
}
//签到
export async function SignInAll(id: string) {
  const data = {
    punch_id: id,
  };

  const res = await hyRequest.post({
    url: "/api/v1/activity/punch",
    data,
  });

  return res;
}
//请求轮播图
export async function GetCarouselImage() {
  let res = await hyRequest.get({ url: "/api/v1/common/carousel/info" });
  return res;
}
export async function GetAnnouncements() {
  let res = await hyRequest.get({ url: "/api/v1/common/notice/list" });
  return res;
}
//获取动漫排行榜的数据
export async function GetComicRankingData(
  navigation_type: number,
  feed_size: number,
  sorted?: number
) {
  const res = await hyRequest.get({
    url: `/api/v1/resource/list?navigation_type=${navigation_type}&feed_size=${feed_size}&sorted=${sorted}`,
  });
  // console.log(res);

  let a = CryptoJSA(res.data);
  return a;
}
//下一页
export async function GetDataForNextPage(
  navigation_type: number,
  feed_size: number,
  sorted: number,
  feed_key: string
) {
  const res = await hyRequest.get({
    url: `/api/v1/resource/list?navigation_type=${navigation_type}&feed_size=${feed_size}&sorted=${sorted}&feed_key=${feed_key}`,
  });

  console.log(res);

  let a = CryptoJSA(res.data);
  return a;
}
//获取每个项目的列表
export async function ProjectList(navigation_type: number) {
  let res = await hyRequest.get({
    url: `/api/v1/category/list?navigation_type=${navigation_type}`,
  });
  // console.log(res);

  let a = CryptoJSA(res.data);
  return a;
}
//获取媒体种类
export async function CategoryList(
  navigation_type: number,
  feed_size: number,
  sorted: number,
  category: string
) {
  const res = await hyRequest.get({
    url: `/api/v1/resource/list?navigation_type=${navigation_type}&feed_size=${feed_size}&sorted=${sorted}&category=${category}`,
  });
  let a = CryptoJSA(res.data);
  return a;
}
//获取媒体种类下一页
export async function CategoryListNextPage(
  navigation_type: number,
  feed_size: number,
  sorted: number,
  category: string,
  feed_key: string
) {
  const res = await hyRequest.get({
    url: `/api/v1/resource/list?navigation_type=${navigation_type}&feed_size=${feed_size}&sorted=${sorted}&category=${category}&feed_key=${feed_key}`,
  });
  // console.log(res);

  let a = CryptoJSA(res.data);
  return a;
}
//获取小说和漫画的详细信息
export async function GetDetailsAboutNovelsAndComics(id: string) {
  let res = await hyRequest.get({
    url: `/api/v1/resource/bookDetail?resource_id=${id}`,
  });
  let a = CryptoJSA(res.data);
  return a;
}
//收藏
export async function gethandleCollect(action: number, resource_id: string) {
  let data = {
    action,
    resource_id,
  };
  let res = hyRequest.post({
    url: "/api/v1/collect/put",
    data,
  });
  return res;
}
//火花进行购买
export async function BuyWithSpark(resourceId: any, itemId: string) {
  let data = {
    item_id: itemId,
    resource_id: resourceId,
  };
  let res = await hyRequest.post({
    url: "/api/v1/resource/purchase",
    data,
  });
  let a = CryptoJSA(res.data);
  return a;
}

//获取漫画小说章节详情
export async function GetComicChapterDetails(
  resource_id: string,
  section_id: string
) {
  //console.log(resource_id, section_id);

  let res = await hyRequest.get({
    url: `/api/v1/resource/bookSection?resource_id=${resource_id}&section_id=${section_id}`,
  });
  //console.log(res.data.code);
  if (res.data.code) {
    console.log(res);

    return res.data;
  }

  let a = CryptoJSA(res.data);
  return a;
}
//获取视频的详细信息
export async function GetVideoDetails(resource_id: string) {
  let res = await hyRequest.get({
    url: `/api/v1/resource/videoDetail?resource_id=${resource_id}`,
  });
  let a = CryptoJSA(res.data);
  return a;
}
//获取视频详细信息
export async function GetVideoDetailsAll(resource_id: any, episode_id: any) {
  let res = await hyRequest.get({
    url: `/api/v1/resource/videoEpisode?resource_id=${resource_id}&episode_id=${episode_id}`,
  });
  let a = CryptoJSA(res.data);
  return a;
}
//获取短视频
export async function GetShortVideo(feed_key: string = "") {
  let res = await hyRequest.get({
    url: `/api/v1/resource/shortVideo?feed_key=${feed_key}`,
  });
  let a = CryptoJSA(res.data);
  return a;
}
