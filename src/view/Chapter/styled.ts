import styled from "styled-components";

const ChapterWrapper = styled.div`
  .content {
    width: 100%;
    height: 30px;
    display: flex;
    padding: 0px 8px;
    overflow-x: auto; /* 允许水平滚动 */
    flex-wrap: nowrap;
    align-items: center;
    box-sizing: border-box;
    margin: 10px;
    /* 隐藏滚动条的样式 */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .leftUl {
      list-style: none;
      height: 100%;
      min-width: 70px;

      border-radius: 20px;
      margin: 0px 10px;
      color: rgb(167, 167, 167);
      font-size: 16px; /* 应该是font-size而不是color */
      text-align: center;

      line-height: 30px;
      font-weight: 500;
      white-space: nowrap; /* 防止文本换行 */
    }
    .selected {
      color: rgb(255, 50, 124);
      background-color: rgb(255, 226, 242);
    }
  }

  .content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .Content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .ContentA {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;

export default ChapterWrapper;
