import styled from "styled-components";

const NovelAndComicDetailsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  .card-container {
    width: 100%;
    height: 240px;
    display: flex;

    overflow: hidden;

    .left {
      height: 240px;
      display: flex;

      align-items: center;
      justify-content: center;
      width: 200px;

      .image {
        width: 160px;
        height: 200px;
        border-radius: 8px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .right {
      box-sizing: border-box;
      width: 250px;
      padding: 30px 4px;

      height: 280px;
      .topName {
        width: 200px;
        height: 50px;
        line-height: 50px;

        font-size: 20px;
        font-weight: 550;
        white-space: nowrap; // 保持内容在一行
        overflow: hidden; // 超出容器部分隐藏
        text-overflow: ellipsis; // 使用省略号表示超出部分
      }
      .author {
        width: 130px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        color: rgb(195, 195, 195);
        white-space: nowrap; // 保持内容在一行
        overflow: hidden; // 超出容器部分隐藏
        text-overflow: ellipsis; // 使用省略号表示超出部分
      }
      .time {
        width: 180px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        color: rgb(195, 195, 195);
        white-space: nowrap; // 保持内容在一行
        overflow: hidden; // 超出容器部分隐藏
        text-overflow: ellipsis; // 使用省略号表示超出部分
      }
      .Label {
        width: 200px;
        height: 30px;
        font-size: 14px;
        /* background-color: #ff4081; */
        display: flex;
        align-items: center;
        .LabelItem {
          margin-right: 8px;
          width: 50px;
          height: 25px;
          background-color: rgb(255, 239, 246);
          color: RGBA(178, 142, 158, 1);
          text-align: center;
          line-height: 25px;
          border-radius: 6px;
        }
      }
      .Item {
        margin-top: 8px;
        width: 250px;
        height: 40px;

        display: flex;
        .Icon {
          width: 50px;
          height: 40px;

          display: flex;
          align-items: center;
          font-size: 10px;
          color: RGBA(178, 142, 158, 1);
        }
        .Detail {
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .DetailTitle {
    .Select {
      padding: 20px 20px;
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: center;
      .common {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        text-align: center;
        line-height: 60px;
        position: relative;

        .Comics {
          font-size: 16px;
          color: RGBA(121, 119, 120, 1);
        }
        .ContentTitle {
          width: 100%;
          height: 100%;
          .Comics {
            font-size: 20px;
            font-weight: bolder;
            color: black;
            z-index: 9;
          }
        }
        .ContentIcon {
          width: 100%;
          height: 100%;
          position: absolute;
          top: -7px;
          left: 4px;
          z-index: 0;
        }
        .ContentIconPath {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 20px;
          left: 4px;
          z-index: 0;
        }
      }
    }
    .content {
      width: 100%;
      height: 70px;
      display: flex;
      padding: 0 8px;
      overflow-x: auto; /* 允许水平滚动 */
      align-items: center;
      box-sizing: border-box;
      margin: 0 10px;
      .leftUl {
        list-style: none;
        height: 100%;
        min-width: 70px; /* 使用min-width而不是width，确保元素不会被压缩 */
        border-radius: 10px;
        margin-right: 10px;
        color: rgb(167, 167, 167);
        font-size: 16px;
        text-align: center;
        line-height: 70px; /* 更新行高以匹配容器高度，保证文字垂直居中 */
        font-weight: 500;
        white-space: nowrap;
        position: relative;
        border: 1px solid #ccc;

        .vip {
          position: absolute;
          top: -20px;
          right: 4px;
          .a {
            position: absolute;
            top: -15px;
            right: 5px;
            font-size: 10px;
          }
        }
        .vipA {
          position: absolute;

          top: -16px;
          right: 4px;
          .a {
            position: absolute;
            top: -10px;
            right: 18px;
            font-size: 10px;
          }
        }
      }

      .selected {
        color: rgb(255, 50, 124);
        background-color: rgb(255, 226, 242);
      }
    }
    .content::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    .Content {
      display: flex;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }
  }
  .Bottom {
    width: 100%;
    height: 70px;
    /* background-color: rebeccapurple; */
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;

    justify-content: center;
    .Icon {
      width: 100px;
      height: 70px;

      text-align: center;
      line-height: 70px;
    }
  }
`;
export default NovelAndComicDetailsWrapper;
