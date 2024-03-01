import styled from "styled-components";

const UserWrapper = styled.div`
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

  .content {
    display: flex;
    justify-content: center;
    .vipInfo {
      margin-top: 100px;
      width: 94%;
      min-height: 400px;
      border-radius: 10px;
      background-color: white;

      .top {
        width: 100%;
        height: 100px;

        display: flex;
        position: relative;
        .imag {
          width: 100px;
          height: 100px;
          border: 1px solid #ccc;
          border-radius: 50%;
          position: relative;
          left: 0px;
          top: -60px;
          overflow: hidden;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .Info {
          width: 260px;
          height: 80px;

          display: flex;
          .left {
            width: 160px;
            height: 100%;

            display: flex;
            flex-direction: column;
            .userName {
              flex: 1;
              padding: 0px 4px;
              line-height: 40px;
              font-size: 22px;
              font-weight: 400;
              white-space: nowrap; // 保持内容在一行
              overflow: hidden; // 超出容器部分隐藏
              text-overflow: ellipsis; // 使用省略号表示超出部分
              max-width: 100%; // 设置最大宽度，确保内容不会超出容器
            }
            .userNikename {
              line-height: 40px;
              padding: 0px 4px;
              font-size: 14px;
              font-weight: 400;
              white-space: nowrap; // 保持内容在一行
              overflow: hidden; // 超出容器部分隐藏
              text-overflow: ellipsis; // 使用省略号表示超出部分
              max-width: 100%; // 设置最大宽度，确保内容不会超出容器
              color: rgb(181, 184, 192);
            }
          }
          .right {
            width: 100px;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
      }
      .vipIcon {
        width: 100%;
        height: 80px;

        display: flex;
        .fire {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .FireIcon {
            width: 100px;
            height: 60px;

            background-color: rgb(255, 235, 238);
            text-align: center;
            padding-top: 8px;
            .firenum {
              color: rgb(255, 41, 123);
              font-size: 20px;
              font-weight: 500;
            }
          }
        }
        .vipRight {
          flex: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .vipIcon {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .bottom {
        width: 100%; /* 元素宽度为100%，以填充屏幕宽度 */
        height: 80px; /* 元素高度为60像素 */
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;

        .selectIcon {
          flex: 1;
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          font-size: 16px;
          font-weight: 300;
          position: relative;
        }
      }
      .category {
        position: relative;
        padding: 40rpx 0;
        border-radius: 12rpx;
        width: 100%;
        height: auto;
        margin-top: 30px;

        .category-item {
          display: flex;
          align-items: center; // 确保垂直居中
          justify-content: space-between; // 如果你希望图标和文字靠左对齐
          width: 100%;
          height: 60px;
          padding-left: 20px;

          .left {
            display: flex;
            .icon {
              position: relative;
              font-size: 50rpx;
              padding-right: 10px;

              &::before {
                content: "";
                position: absolute;
                left: 0; // 如果icon是固定宽度，可以改为确切的百分比或距离
                top: 50%;
                width: 20rpx;
                height: 20rpx;
                background-color: #ccc;
                border-radius: 50%;
                transform: translate(
                  0,
                  -50%
                ); // 如果left为0，translate只需要处理垂直偏移
              }
            }

            .title {
              color: rgb(99, 99, 99);
              font-size: 18px;
              // 如果需要，可以增加 margin-left 来给icon和文字之间增加一些间距
            }
          }
          .right {
            width: 100px;
            height: 100%;

            .icon {
              // 假设图标背景是灰色的
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: right;
              align-items: center;
              padding-right: 20px;
            }
          }
        }
      }
    }
  }
  .end {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    width: 100%;
    height: auto;

    margin-bottom: 110px;
    .endItem {
      width: 110px;
      height: 150px;
      border-radius: 4px;
      margin: 0px 10px;
    }
  }

  .bigger {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .content {
      width: 6.5rem;
      /* height: 8rem; */
      position: relative;
      top: 20%;
      /* left: 50%; */
      transform: translateY(-50%);
      /* transform: translateX(-50%); */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      /* background-color: red; */
      .big {
        height: 1.8rem !important;
        width: 1.3rem !important;
        margin: 4px 4px;
        position: relative;
        .item {
          width: 100%;
          height: 100%;
          background-color: #1d2541;
          background-image: url(https://mzsmsm03.com/static/images/decoration/signin-item.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          .day {
            width: 100%;
            height: 0.26rem;
            text-align: center;
            .title {
              font-size: 12px;
              color: black;
              line-height: 0.2rem;
            }
          }
          .bottoma {
            /* background-color: red; */
            width: 100%;
            height: 0.4rem;
            text-align: center;
            line-height: 0.2rem;
            position: absolute;
            left: 0px;
            bottom: 0px;
            z-index: 99999;
            .bottomTitle {
              font-size: 12px;
              color: red;
            }
            .bottomTitleA {
              font-size: 12px;
              color: black;
            }
          }
        }
      }
      .big:nth-child(7) {
        /* 设置div的高度和宽度 */
        height: 1.6rem !important;
        width: 2.9rem !important;
        /* 设置背景图片 */
        background-image: url("https://mzsmsm03.com/static/images/decoration/signin-item-big.png");
        /* 覆盖并保持图片宽高比 */
        background-size: cover;
        /* 使图片始终居中 */
        background-position: center center;
        /* 不重复背景图片 */
        background-repeat: no-repeat;
        .day {
          width: 100%;
          height: 0.26rem;
          text-align: center;
          .title {
            font-size: 12px;
            color: black;
            line-height: 0.2rem;
          }
        }
        .bottoma {
          width: 100%;
          height: 0.4rem;
          text-align: center;
          line-height: 0.26rem;
          position: absolute;

          bottom: 0px;
          z-index: 99999;

          .bottomTitle {
            width: 100%;
            font-size: 12px;
            color: red;
            text-align: center;
          }
        }
      }
    }
    .Sign {
      width: 3rem;
      height: 1rem;
      background-color: red;
      position: relative;
      left: 48%;
      transform: translateX(-50%);
      top: 12%;
      background-color: rgb(255, 86, 166);
      border-radius: 0.5rem;
      text-align: center;
      line-height: 1rem;
    }
  }
  .biggerA {
    .tn-p-lg {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff; /* 文本颜色 */
      text-align: center;
      font-size: 18px;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }

  .title {
    color: blue;
    font-size: 1em;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    color: #1d2541;
  }
  .buttons {
    display: flex;
  }
  .button {
    width: 100px;
    padding: 10px;
    margin: 10px 0;

    border: none;
    cursor: pointer;
    border-radius: 20px;
    background-color: #ebeffd;
    margin: 0px 6px;
    color: white;
    font-size: 12px;
  }
  .button1 {
    background-color: rgb(255, 117, 116);
  }
  .button2 {
    background-color: rgb(255, 39, 135);
  }
`;
export default UserWrapper;
