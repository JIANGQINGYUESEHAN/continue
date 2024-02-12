import styled from "styled-components";

const InfoWrapper = styled.div`
  .feature-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;

    .feature-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border: #ccc 1px solid;

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
        color: black; // 假设文本颜色是深灰色
        font-weight: lighter;
      }
    }
  }
`;
export default InfoWrapper;
