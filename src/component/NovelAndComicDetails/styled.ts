import styled from "styled-components";

const NovelAndComicDetailsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
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
    .Content {
      width: 100%;
      height: 100px;
      background-color: red;
    }
  }
`;
export default NovelAndComicDetailsWrapper;
