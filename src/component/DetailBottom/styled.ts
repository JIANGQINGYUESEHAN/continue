import { styled } from "styled-components";

const DetailBottomWrapper = styled.div`
  width: 100%;
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-around; /* 改为 space-around 为图标分配均等空间 */
    border-top-left-radius: 10px; /* 仅顶部两角为圆角 */
    border-top-right-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.05); /* 添加阴影效果 */
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 22px; /* 调整图标大小 */
    color: #333; /* 图标默认颜色 */
  }

  .text {
    font-size: 12px;
    color: #666; /* 文字颜色 */
    margin-top: 4px; /* 文字与图标间距 */
  }
`;
export default DetailBottomWrapper