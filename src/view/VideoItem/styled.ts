import styled from "styled-components";

const VideoItemWrapper = styled.div`
  .videoItem {
    width: 47vw;
    height: 170px;
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* background-color: red; */
    border-radius: 10px;

    .videoImag {
      width: 45vw;
      height: 120px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      .video {
        width: 200px;
        height: 140px;
        overflow: hidden;
        .image {
          width: 100%;
          height: 100%;
        }
      }
      .ItemVip {
        position: absolute;
        right: 10px;
        top: 0px;
        width: 20px;
        height: 20px;
      }
      .ItemComputed {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 40px;
        height: 40px;
      }
      .ItemFire {
        position: relative;
        right: -140px;
        bottom: 55px;
        width: 40px;
        height: 40px;
        .ItemNum {
          font-size: 10px;
          color: RGBA(255, 0, 0, 1);
          font-weight: 1000;
          position: relative;
          right: -4px;
          bottom: 29px;
        }
      }
    }
    .ItemInfo {
      width: 200px;
      height: 50px;

      position: relative;
      top: 0px;
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      .ItemName {
        width: 100%;
        flex: 1;
        /* background-color: #ffd77e; */

        line-height: 25px;
        padding: 0px 4px;
        white-space: nowrap; /* 保持文本在一行 */
        overflow: hidden; /* 隐藏超出部分的文本 */
        text-overflow: ellipsis; /* 使用省略号表示文本溢出 */
        font-weight: 800;
        font-size: 16px;
      }
      .VisitNum {
        width: 100%;
        flex: 1;
        /* background-color: #ffd77e; */
        line-height: 25px;
        padding: 0px 8px;
        color: rgb(181, 184, 192);
      }
    }
  }
`;
export default VideoItemWrapper;
