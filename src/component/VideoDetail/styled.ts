import styled from "styled-components";

const VideoDetailWrapper = styled.div`
  .videoItem {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    .videoContent {
      width: 100%;
      height: 220px;
      position: relative;
      .Icon {
        width: 25px;
        height: 25px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .IconA {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 50%;
        bottom: 50%;
      }
      .videoImag {
        width: 100%;
        height: 100%;
        .video {
          width: 100%;
          height: 100%;
        }
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .detail {
      width: 100%;
      height: 210px;

      .top {
        width: 100%;
        height: 140px;
        margin-top: 20px;
        display: flex;
        border-radius: 2px;

        .imageTop {
          flex: 1;
          height: 100%;
          width: 180px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          .videoImag {
            width: 160px;
            height: 120px;
            border-radius: 6px;
            overflow: hidden;
            .img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .detailTop {
          box-sizing: border-box;
          flex: 1;
          width: 180px;
          border-radius: 10px;
          padding: 8px;
          height: 100%;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .firstFloor {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center; // 垂直居中
            justify-content: space-between; // 两端对齐

            .counters {
              display: flex;
              align-items: center;

              .counter {
                display: flex;
                align-items: center;
                margin-left: 5px; // 两个计数器之间的间距

                width: 60px;
                .icon {
                  display: flex;
                  margin-right: 5px;
                  align-items: center;
                }

                .number {
                  // 数字的样式
                  font-size: 10px;
                  color: #666;
                }
              }
            }
          }
          .titleAuthor {
            line-height: 30px;
            height: 40px;
            font-size: 12px;
            margin-left: 5px;
            color: #333;
            white-space: nowrap; // 防止文本换行
            overflow: hidden; // 隐藏溢出的文本
            text-overflow: ellipsis; // 用省略号表示溢出的文本
            max-width: 140px; // 确保标题不超过容器宽度
            display: block; // 或者使用inline-block，取决于布局需求
          }
          .titleAuthorA {
            line-height: 30px;
            height: 40px;
            font-size: 12px;
            margin-left: 5px;
            color: #333;
            white-space: nowrap; // 防止文本换行
            overflow: hidden; // 隐藏溢出的文本
            text-overflow: ellipsis; // 用省略号表示溢出的文本
            max-width: 180px; // 确保标题不超过容器宽度
            display: block; // 或者使用inline-block，取决于布局需求
          }
          .title {
            margin-left: 5px;
            height: 40px;
            // 标题的样式
            font-size: 20px;
            color: #333;
            white-space: nowrap; // 防止文本换行
            overflow: hidden; // 隐藏溢出的文本
            text-overflow: ellipsis; // 用省略号表示溢出的文本
            max-width: 140px; // 确保标题不超过容器宽度
            display: block; // 或者使用inline-block，取决于布局需求
          }
        }
      }
      .middle {
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;
        padding: 0px 6px;
        justify-content: space-between;
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
        .Collect {
          display: flex;
          align-items: center;
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
        background-color: rgb(242, 242, 242);
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
    .ContentA {
      display: flex;
      align-items: flex-start;
      align-items: flex-start;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
export default VideoDetailWrapper;
