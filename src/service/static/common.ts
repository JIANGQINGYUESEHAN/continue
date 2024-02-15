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
