import styled from "styled-components";

const InfoWrapper = styled.div`
  .icon {
    // 假设图标背景是灰色的
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .feature-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;

    .feature-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 50px;

      border-radius: 10px;

      .icon {
        // 假设图标背景是灰色的
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text {
        flex: 1;
        font-size: 14px;
        color: black; /* 假设文本颜色是深灰色，这里使用CSS注释的正确格式 */
        font-weight: lighter;
        overflow: hidden; /* 隐藏溢出的内容 */
        white-space: nowrap; /* 使所有文本在一行显示 */
        text-overflow: ellipsis; /* 用省略号表示被裁切的文本 */
      }
    }
  }
`;
export default InfoWrapper;
