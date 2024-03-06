import styled from "styled-components";

const ComicsWrapperStyled = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url("https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png")
    no-repeat;
  background-size: 100% 20vh; /* 设置背景图片宽度为100%，高度自动调整 */
  background-position: top; /* 背景图片顶部对齐 */

  /* 在此设置背景颜色 */
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  box-sizing: border-box;
  margin-bottom: 40px;
  z-index: 0;

  .ContentAAA {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .Select {
      padding: 5px 20px;
      display: flex;
      width: 100%;
      height: 70px;
      z-index: 9;
      .common {
        width: 40px;
        height: 60px;
        margin-right: 10px;
        text-align: center;
        line-height: 60px;
        position: relative;

        .Comics {
          font-size: 16px;
          color: RGBA(121, 119, 120, 1);
          z-index: 4;
        }
        .ContentTitle {
          width: 100%;
          height: 100%;
          z-index: 3;
          .Comics {
            font-size: 20px;
            font-weight: bolder;
            color: black;
            z-index: 9999 !important;
          }
        }
        .ContentIcon {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 22px;
          left: 0px;
          z-index: -1;
        }
      }
    }
    .SelectAA {
      width: 110px;
      height: 100%;
      display: flex;
      justify-content: right;
      padding-right: 10px;
      box-sizing: border-box;
      align-items: center;
      z-index: 9;
      .ContentIconA {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;
        .img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .carousel {
    border-radius: 16px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 200px;
    overflow: hidden;

    .Swiper {
      width: 100%;
      height: 100%;
      .imag {
        width: 100%;
        height: 100%;
      }
    }
  }
  .Content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }
`;
export default ComicsWrapperStyled;
