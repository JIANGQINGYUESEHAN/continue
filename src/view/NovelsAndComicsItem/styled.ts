import styled from "styled-components";

const NovelsAndComicsItemWrapper = styled.div`
  .product-item {
    position: relative;
    width: 22vw;
    margin: 4px;
    height: 180px;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* background-color: #ffd77e; */
    overflow: hidden;
    position: relative;
    .product-image {
      position: relative;
      width: 100%;
      height: 130px;
      border-radius: 2px;
      position: relative;
      overflow: hidden;

      .image {
        width: 120px;
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
      right: -55px;
      bottom: 35px;
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
    .ItemInfo {
      width: 100%;
      height: 50px;
      /* background-color: red; */
      z-index: 9999;
      position: relative;
      top: -40px;
      display: flex;
      flex-direction: column;
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
export default NovelsAndComicsItemWrapper;
