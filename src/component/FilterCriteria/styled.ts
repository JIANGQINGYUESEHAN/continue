import { styled } from "styled-components";

const FilterCriteriaWrapper = styled.div`
  .Select {
    padding: 20px 20px;
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    .common {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      text-align: center;
      line-height: 60px;
      position: relative;

      .Comics {
        font-size: 16px;
        color: RGBA(121, 119, 120, 1);
      }
      .ContentTitle {
        width: 100%;
        height: 100%;
        .Comics {
          font-size: 20px;
          font-weight: bolder;
          color: black;
          z-index: 9;
        }
      }
      .ContentIcon {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -7px;
        left: 4px;
        z-index: 0;
      }
      .ContentIconPath {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 20px;
        left: 4px;
        z-index: 0;
      }
    }
  }
  .SelectAA {
    padding: 10px 0px;
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;

    .common {
      width: 90px;
      height: 60px;
      margin-right: 10px;
      text-align: center;
      line-height: 60px;
      position: relative;

      .Comics {
        font-size: 16px;
        color: RGBA(121, 119, 120, 1);
      }
      .ContentTitle {
        width: 100%;
        height: 100%;
        .Comics {
          font-size: 20px;
          font-weight: bolder;
          color: black;
          z-index: 9;
        }
      }
      .ContentIcon {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 27px;
        left: 0px;
        z-index: 0;
      }
    }
  }

  .content {
    width: 100%;
    height: 36px;
    display: flex;
    padding: 0px 8px;
    overflow-x: auto; /* 允许水平滚动 */
    flex-wrap: nowrap;
    align-items: center;
    box-sizing: border-box;
    margin: 8px 0px;
    /* 隐藏滚动条的样式 */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .leftUl {
      list-style: none;
      height: 100%;
      min-width: 70px;
      border: 1px solid #ccc;
      border-radius: 20px;
      margin: 0px 10px;
      color: black;
      font-size: 16px; /* 应该是font-size而不是color */
      text-align: center;

      line-height: 36px;
      font-weight: 500;
      white-space: nowrap; /* 防止文本换行 */
    }
    .selected {
      color: white;
      background-color: red;
    }
  }

  .content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .Content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
    height: auto;
  }
  .ContentA {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
  }
`;
export default FilterCriteriaWrapper;
