import styled from "styled-components";

const NovelAndComicDetailsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  .card-container {
    height: 280px;
    display: flex;
    width: 200px;
    overflow: hidden;

    .left {
      height: 240px;
      display: flex;

      align-items: center;
      justify-content: center;
      width: 180px;
      background-color: #ff4081;
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
      width: 100px;
      padding: 30px 4px;
      height: 280px;
      background-color: red;
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
        width: 100%;
        height: 40px;
        background-color: #ff4081;
        display: flex;
        .Icon {
          display: flex;
          align-items: center;
          width: 100px;
          height: 40px;
          background-color: rebeccapurple;
          .icon {
            height: 40px;
            width: 18px;
            display: flex;
            align-items: center;
            background-color: red;
          }
        }
        .Love {
          height: 40px;
          width: 100%;
          background-color: black;
        }
      }
    }
  }
`;
export default NovelAndComicDetailsWrapper;
