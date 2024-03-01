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
    margin-top: 6px;
    padding: 10px;

    .feature-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 80%;
      height: 70px;

      border-radius: 10px;

      .icon {
        // 假设图标背景是灰色的
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
        display: flex;
        flex-direction: column;
        .top {
          flex: 1;
          width: 100%;
          background-color: rebeccapurple;
        }
        .bottom {
          flex: 1;
          width: 100%;
          background-color: red;
        }
      }
    }
  }
`;
export default InfoWrapper;
