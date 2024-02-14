import styled from "styled-components";

const LoginByPasswordWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  position: relative;
  .header {
    margin-top: 40px;
    width: 100%;
    height: 100px;
    /* background-color: rebeccapurple; */
    padding-left: 10px;
    .welcome {
      font-size: 40px;
      line-height: 100px;
    }
  }
`;
export default LoginByPasswordWrapper;
