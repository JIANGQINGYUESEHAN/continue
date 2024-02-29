import styled from "styled-components";

const SetWrapper = styled.div`
  .feature-list {
    display: flex;

    margin-top: 10px;
    padding: 10px;
    justify-content: space-between;
    .feature-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border-bottom: rgb(247, 249, 252) 1px solid;

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
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;

      .icon {
        // 假设图标背景是灰色的
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export default SetWrapper;
