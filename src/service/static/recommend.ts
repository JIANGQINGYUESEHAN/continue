import hyRequest from "..";

//注册非正式用户
export function getBaseInfo() {
  return hyRequest.post({
    url: "/api/v1/auth/init",
  });
}
