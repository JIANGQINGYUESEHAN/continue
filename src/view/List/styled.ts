import styled from "styled-components";

const ListWrapper = styled.div`
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
  .Content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
  }
  .ContentA {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }
`;
export default ListWrapper;
