import styled from "styled-components";

const FixPersonWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png)
    100% no-repeat;
  background-size: 100% 100%;
  position: relative;
  .userInfo {
    width: 100%;
    height: 180px;
    margin-top: 10px;

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
        background-color: rebeccapurple;
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

    padding: 20px;
    flex-direction: column;
    .nikename {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 80px;
        height: 60px;
        line-height: 60px;
        padding-left: 10px;
        font-weight: 300;
        font-size: 16px;
      }
      .right {
        width: 160px;
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: center;
        align-items: center; /* 新增：垂直居中所有子项 */
        .image {
          width: 60px;
          height: 60px;
          background-color: red;
          border-radius: 50%;
          overflow: hidden;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .Input {
          width: 160px;
          height: 40px;
          border: none !important;
          font-size: 16px; /* 设置为你想要的大小 */
          padding-left: 10px;
        }
      }
    }
    .nikenameA {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 80px;
        height: 60px;
        line-height: 60px;
        padding-left: 10px;
        font-weight: 300;
        font-size: 16px;
      }
      .right {
        width: 160px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center; /* 新增：垂直居中所有子项 */
        .people {
          display: flex; /* 使用Flexbox对齐复选框和文本 */
          align-items: center; /* 垂直居中对齐 */
          margin-left: 10px; /* 维持原有的左边距 */
          /* 如果需要，也可以直接为复选框和文本设置样式 */
          .InputCheckbox,
          .people span {
            margin: 0;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .Submit {
    position: fixed;
    bottom: 50px;
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
export default FixPersonWrapper;
