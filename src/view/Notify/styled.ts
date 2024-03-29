import styled from "styled-components";

const NotifyWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;

  .news {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 94%;

    height: 40px;
    display: flex;
    color: black;
    border-radius: 8px;
    background-color: rgb(250, 250, 250);
    .left {
      height: 100%;
      flex: 1;
      line-height: 40px;
      position: relative;

      .border {
        position: absolute;
        width: 2px;
        height: 20px;
        top: 50%;

        transform: translateY(-50%);
        background-color: rgb(178, 178, 178);

        right: 0px;
        z-index: 3;
      }
      .icon {
        display: flex; /* 开启 flex 布局 */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 7;
      overflow: hidden;

      height: 100%;
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .new {
        color: black;
        line-height: 40px;
        font-size: 20px;
        display: inline-block;
        white-space: nowrap; /* 确保文本不换行 */

        animation: marquee 15s linear infinite; /* 应用动画 */
      }
    }
  }
`;
export default NotifyWrapper;
