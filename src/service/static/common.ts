import hyRequest from "..";

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

  return res;
}
//绑定手机号
