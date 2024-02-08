import styled from "styled-components";

const SelectWrapper = styled.div`
  margin-top: 10px;
  padding: 0px 10px;

  .bottom {
    width: 100%; /* 元素宽度为100%，以填充屏幕宽度 */
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    .selectIcon {
      flex: 1;
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: RGBA(114, 115, 120, 1);
    }
  }
`;
export default SelectWrapper;
