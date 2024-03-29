import styled from "styled-components";

const ShortVideoWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  .verticalContent {
    height: 100vh; /* 使每个swiper item的高度等于视口高度 */
    width: 100vw; /* 使每个swiper item的宽度等于视口宽度 */
    display: flex;
    justify-content: center;
    align-items: center;
    .videoItem {
      width: 100vw;
      height: 100vh;
      z-index: 999;

      .Video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
      .video-bottom-areaA {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0px;
        bottom: 50px;
        z-index: 999;

        .video-bottom-area {
          width: 100%;
          height: 110px;
          position: absolute;
          left: 0px;
          bottom: -20px;
          z-index: 999;
          background-color: rgba(255, 255, 255);
          .shop-nameA {
            color: #fff;
            margin-bottom: 6px;
            padding-left: 20px;
          }
          .shop-cardA {
            width: 160px;
            height: 80px;
            padding-left: 20px;
            padding-top: 4px;
            border-radius: 4px;
          }
        }
      }
      .video-side-right {
        position: absolute;
        right: 12px;
        bottom: 120px;
        color: #fff;
        z-index: 999;
        .action-item {
          position: relative;
          margin-bottom: 30px;
          text-align: center;
          .shop-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
          }
          .iconfont {
            display: block;
            font-size: 25px;
          }
          .action-item-text {
            display: block;
            font-size: 12px;
          }
          .action-btn {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f60;
            .iconfont {
              font-size: 16px;
            }
          }
        }
        .action-item-user {
          margin-bottom: 40px;
        }
      }
    }
  }
`;
export default ShortVideoWrapper;
