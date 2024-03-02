import styled from "styled-components";

const Searchwrapper = styled.div`
  .search-box {
    display: flex;
    align-items: center;
    background: #f5f5f5;
    padding: 10px;
    width: 100%;
    height: 70px;
    .back-button,
    .search-button {
      background: transparent;
      border: none;
      cursor: pointer;
      margin: 0 10px;
      flex: 1;
      height: 100%;
    }

    .input-wrapper {
      flex-grow: 1;
      position: relative;
      background: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      flex: 5;
      height: 100%;

      input {
        border: none;
        outline: none;
        width: 100%;
        line-height: 1.5;
        font-size: 10px;
      }

      .clear-button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 20px;
      }
    }
  }
`;
export default Searchwrapper;
