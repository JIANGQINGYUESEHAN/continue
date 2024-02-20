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

      .videoImag {
        width: 100%;
        height: 100%;
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .detail {
      width: 100%;
      height: 230px;

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
    .ContentA {
      display: flex;
      align-items: center;

      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
export default VideoDetailWrapper;
