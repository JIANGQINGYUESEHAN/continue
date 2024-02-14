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
      height: 60px; // 设定高度
      padding: 0 10px; // 增加两边的间隔
      overflow: hidden;
      margin-bottom: 10px;

      .type {
        width: 100%;
        height: 60px; // 设定高度
        overflow: hidden; // 隐藏溢出的内容
        display: flex;
        justify-content: flex-start; // 开始位置对齐
        align-items: center;

        .ul {
          width: 100%;
          .list {
            min-width: 60px; // 最小宽度，根据内容调整
            height: 60px; // 高度
            background-color: #f2f2f2; // 设置为灰色背景
            margin-right: 10px; // 项目间距
            border-radius: 10px; // 圆角
            text-align: center;
            line-height: 60px; // 行高与高度相同，使文字垂直居中
            color: #333; // 文字颜色
            flex-shrink: 0; // 防止压缩
            position: relative;
            &.active {
              background-color: #ff3a4d; // 激活状态的背景色
              color: white; // 激活状态的文字颜色
            }
            .vip {
              position: absolute;
              top: -15px;
              right: 5px;
            }
          }
        }
      }
    }
    .Content {
      display: flex;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
export default NovelAndComicDetailsWrapper;
