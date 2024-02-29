import styled from "styled-components";

const LoginByPasswordWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url("https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png")
    no-repeat;
  background-size: 100% 40vh; /* 设置背景图片宽度为100%，高度自动调整 */
  background-position: top; /* 背景图片顶部对齐 */

  /* 在此设置背景颜色 */
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  box-sizing: border-box;
  margin-bottom: 40px;
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
  .change {
    width: 100%;
    height: 80px;
    margin-top: 20px;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
  }
  .repeat {
    padding: 0px 20px;
    width: 100%;
    height: 80px;
    /* background-color: firebrick; */
    position: relative;
    top: -80px;
    /* opacity: 0.4; */
    display: flex;

    .left {
      flex: 1;
      height: 100%;
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      .active {
        width: 20px;
        height: 4px;
        background-color: red;
        border-radius: 4px;
      }
    }
    .right {
      flex: 1;
      height: 100%;
      /* background-color: rebeccapurple; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      flex-direction: column;
      .active {
        width: 20px;
        height: 4px;

        border-radius: 4px;
      }
    }
  }
  .Content {
    width: 91%;
    height: 400px;
    background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));

    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center; /* 水平居中 */
    padding: 20px;
    top: -94px;
    .SendCode {
      width: 100px;
      height: 40px;
      position: absolute;
      bottom: 142px;
      right: 56px;
      color: rgb(99, 165, 253);
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
    }
    .Form {
      display: flex;
      justify-content: center; /* 水平居中 */
      /* padding: 40px; */
      margin: 0px 40px;
      flex-direction: column;
    }
  }

  .Submit {
    border: none; /* 去除边框 */
    position: relative;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 60px;
    background-color: rgb(255, 49, 159);
    border-radius: 60px;
    text-align: center;
    line-height: 60px;
    color: white;
    font-size: 20px;
  }
`;
export default LoginByPasswordWrapper;
