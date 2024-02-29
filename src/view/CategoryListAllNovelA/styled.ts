import styled from "styled-components";

const CategoryListAllNovelWrapper = styled.div`
  .Select {
    padding: 0px 20px;
    display: flex;
    width: 100%;
    height: 60px;
    .common {
      width: 40px;
      height: 60px;
      margin-right: 10px;
      text-align: center;
      line-height: 60px;
      position: relative;

      .Comics {
        font-size: 12px;
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
  .Content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
export default CategoryListAllNovelWrapper;
