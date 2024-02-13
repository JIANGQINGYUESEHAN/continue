import styled from "styled-components";

const SpecialOfferWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png)
    100% no-repeat;
  background-size: 100% 100%;
  .Content {
    width: 100%;
    height: 180px;
    margin-top: 60px;

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
    .NameA {
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 16px;
    }
  }
  .Vip {
    width: 94%;
    height: 400px;
    background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
    border-radius: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .ContainAA {
      position: relative; /* 相对定位 */
      width: 100%; /* 容器宽度 */
      height: 80px; /* 容器高度 */
      overflow: hidden; /* 隐藏溢出内容 */
      display: flex;
      justify-content: center;
      position: relative;
      flex-direction: column;

      .TitleContent {
        position: absolute;

        top: -70px;
        /* opacity: 0; */

        width: 400px; /* 容器宽度 */
        height: 70px; /* 容器高度 */
        position: relative;
        left: 50%;
        background-color: rgba(255, 255, 255, 0);
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        .left {
          flex: 1;
          /* background-color: rebeccapurple; */
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
          .active {
            padding-bottom: 8px;
            border-bottom: 1px solid red;
          }
        }
        .right {
          flex: 1;
          height: 100%;
          /* background-color: red; */
          text-align: center;
          line-height: 50px;
          font-size: 20px;
          .active {
            padding-bottom: 8px;
            border-bottom: 1px solid red;
          }
        }
      }
    }
    .ContentA {
      width: 100%;
      height: 440px;

      display: flex;
      justify-content: center;
      padding-top: 20px;
      flex-wrap: wrap;
    }
  }
`;
export default SpecialOfferWrapper;
