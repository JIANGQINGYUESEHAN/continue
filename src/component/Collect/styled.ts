import styled from "styled-components";

const CollectWrapper = styled.div`
  .Select {
    padding: 20px 20px;
    display: flex;
    width: 100%;
    height: 80px;
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
export default CollectWrapper;
