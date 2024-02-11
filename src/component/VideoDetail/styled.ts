import styled from "styled-components";

const VideoDetailWrapper = styled.div`
  .videoItem {
    background-color: #010f1f;

    .videoContent {
      width: 100%;
      height: 100%;
      position: relative;
      background-color: #010f1f;
      .content {
        position: relative;
        .video {
          width: 100%;
          height: 220px;
          background-color: #010f1f;
        }
        .open {
          left: 165px;
          top: -140px;
          position: relative;
        }
      }

      .detail {
        position: relative;
        top: -3px;
        background-color: #010f1f;
        width: 100%;
        height: 230px;
        padding: 6px 10px;
        color: #ffd682;
        .top {
          width: 100%;
          height: 120px;
          background-color: #010f1f;
          display: flex;
          border-radius: 10px;
          .imageTop {
            flex: 1;
            height: 100%;
            background-color: #010f1f;
            border-radius: 10px;
            color: #ffd682;
            .image {
              width: 100%;
              height: 100%;
            }
          }
          .detailTop {
            border-radius: 10px;
            flex: 1;
            background-color: #010f1f;
            height: 100%;
            border-radius: 15px;
            padding: 0px 30px;
            display: flex;
            flex-direction: column;
            margin-top: 0px;
            align-items: flex-start;
            justify-content: flex-start;
            color: #ffd682;
            .likes {
              flex: 1;
              font-size: 0.9em;
              color: #ffd682;
              display: flex;
              justify-content: center;
              .like-count,
              .comment-count,
              .heart-count {
                margin-right: 5px;
              }
            }

            .info {
              flex: 1;
              .username {
                color: #ffd682;
                font-size: 0.8em;
                margin-top: 0px;
                margin-bottom: 5px;
              }

              .like-button {
                background-color: #ffc0cb;
                border: none;
                color: white;
                padding: 5px 10px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 0.8em;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 10px;
              }

              .like-buttonHover {
                background-color: #ff69b4;
              }
            }
          }
        }
        .middle {
          width: 100%;
          height: 70px;

          .Title {
            height: 30px;
            width: 100%;

            line-height: 30px;
            padding: 0px 10px;
            white-space: nowrap; /* 保持文本在一行内 */
            overflow: hidden; /* 隐藏溢出的文本 */
            text-overflow: ellipsis; /* 使用省略号表示文本溢出 */
            display: block; /* 块级元素才能应用省略号 */
            width: 100%; /* 设置一个宽度限制 */
            .titleSpan {
              font-size: 18px;
              font-weight: 1000;
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            }
          }
          .detailTitle {
            width: 100%;
            height: 40px;

            display: flex;

            .hah {
              flex: 1;
              height: 40px;
              line-height: 40px;
              text-align: center;
            }
            .haha {
              flex: 1;
              height: 100%;
              width: 100%;
              line-height: 40px;
              text-align: center;
              overflow: hidden;
              .label {
                display: inline-block;
                margin: 0px 2px;
              }
            }
          }
        }
      }
    }
    .other {
      background-color: #010f1f;
      width: 100%;
      min-height: 150px;
      .videoList {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-top: 4px;
      }
    }
  }
`;
export default VideoDetailWrapper;
