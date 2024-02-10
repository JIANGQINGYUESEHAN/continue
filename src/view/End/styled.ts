import styled from "styled-components";

const EndWrapper = styled.div`
  .button-group {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .button {
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-button {
    background-color: rgb(255, 97, 95);
    color: #ffffff;
  }

  .right-button {
    background-color: rgb(255, 46, 153);
    color: #ffffff;
  }

  .icon {
    margin-right: 5px;
  }
  .end {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffd76f; /* 根据您的图片，文本颜色看起来是浅灰色 */
    font-size: 14px; /* 调整为您希望的字体大小 */

    .hint {
      height: 50px;
      width: 300px;
    }
  }
  .last {
  }
`;
export default EndWrapper;