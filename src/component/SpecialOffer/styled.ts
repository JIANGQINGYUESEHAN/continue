import styled from "styled-components";

const SpecialOfferWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url("https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png")
    no-repeat;
  background-size: 100% 40vh; /* 设置背景图片宽度为100%，高度自动调整 */
  background-position: top; /* 背景图片顶部对齐 */

  /* 在此设置背景颜色 */
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  box-sizing: border-box;
  margin-bottom: 40px;
  .Content {
    width: 100%;
    height: 180px;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
      width: 80px;
      height: 80px;
      background-color: rebeccapurple;
      border-radius: 50%;
      overflow: hidden;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .Name {
      width: 100%;
      height: 60px;

      text-align: center;
      line-height: 60px;
      font-size: 20px;
    }
  }
  .change {
    width: 100%;
    height: 80px;
    margin-top: 20px;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
  }
  .repeat {
    padding: 0px 20px;
    width: 100%;
    height: 80px;
    /* background-color: firebrick; */
    position: relative;
    top: -80px;
    /* opacity: 0.4; */
    display: flex;

    .left {
      flex: 1;
      height: 100%;
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      .active {
        width: 20px;
        height: 4px;
        background-color: red;
        border-radius: 4px;
      }
    }
    .right {
      flex: 1;
      height: 100%;
      /* background-color: rebeccapurple; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      flex-direction: column;
      .active {
        width: 20px;
        height: 4px;
        background-color: red;
        border-radius: 4px;
      }
    }
  }
  .Vip {
    width: 90%;
    height: 200;
    background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));

    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: -95px;

    .ContentA {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 20px;
      flex-wrap: wrap;
    }
  }
  .trade {
    width: 100%;
    height: 100px;

    display: flex;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-around;
    .left {
      flex: 1;
      height: 60px;
      display: flex;

      align-items: center;
      .name {
      }
    }
    .right {
      flex: 1;
      height: 60px;

      display: flex;

      align-items: center;
      .name {
      }
    }
  }
`;
export default SpecialOfferWrapper;
