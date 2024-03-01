import { styled } from "styled-components";

const FilterCriteriaWrapper = styled.div`
  overflow: hidden;
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
      margin-bottom: 5px;

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
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4px;

    .common {
      width: 60px;
      height: 60px;
      margin-right: 10px;
      text-align: center;
      line-height: 60px;
      position: relative;

      .Comics {
        font-size: 14px;
        color: RGBA(121, 119, 120, 1);
      }
      .ContentTitle {
        width: 100%;
        height: 100%;
        .Comics {
          font-size: 18px;
          font-weight: bolder;
          color: black;
          z-index: 9;
        }
      }
      .ContentIcon {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 22px;
        left: 0px;
        z-index: 0;
      }
    }
  }

  .content {
    margin-top: 4px;
    width: 100%;
    height: 30px;
    display: flex;
    padding: 0px 8px;
    overflow-x: auto; /* 允许水平滚动 */
    flex-wrap: nowrap;
    align-items: center;
    box-sizing: border-box;

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
