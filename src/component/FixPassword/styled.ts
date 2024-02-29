import styled from "styled-components";

const FixPasswordWrapper = styled.div`
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
  .userInfo {
    width: 100%;
    height: 180px;
    margin-top: 40px;

    display: flex;
    align-items: center;
    padding: 0px 20px;
    .avater {
      height: 180px;
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        height: 140px;
        width: 140px;
        border-radius: 50%;

        overflow: hidden;
        border: 1px solid #ccc;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .title {
      margin-bottom: 10px;
      width: 100%;
      height: 150px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .info {
        height: 40px;
        width: 100%;
        line-height: 40px;
        padding-left: 10px;

        .user {
          font-size: 20px;
        }
        .password {
          font-size: 20px;
        }
      }
      .infoA {
        height: 30px;
        width: 100%;
        line-height: 30px;
        padding-left: 10px;

        .userA {
          font-size: 14px;
          color: rgb(149, 140, 146);
        }
        .passwordA {
          font-size: 14px;
          color: rgb(149, 140, 146);
        }
      }
    }
  }
  .Content {
    width: 94%;
    height: 400px;
    background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
    border-radius: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center; /* 水平居中 */
    padding: 20px;
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
export default FixPasswordWrapper;
