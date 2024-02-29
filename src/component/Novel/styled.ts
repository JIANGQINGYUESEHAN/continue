import styled from "styled-components";

const NovelWrapper = styled.div`
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
  .Select {
    padding: 0px 20px;
    display: flex;
    width: 100%;
    height: 60px;
    .common {
      width: 40px;
      height: 60px;
      margin-right: 10px;
      text-align: center;
      line-height: 60px;
      position: relative;

      .Comics {
        font-size: 12px;
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
        top: 27px;
        left: 0px;
        z-index: 0;
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
`;
export default NovelWrapper;
