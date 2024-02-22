import styled from "styled-components";

const RankWrapper = styled.div`
  .Select {
    padding: 10px 0px;
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
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
    height: auto;
    display: flex;

    padding: 0px 10px;
    .left {
      min-width: 80px;
      height: 100px;
      .leftUl {
        list-style: none;
        height: 40px;
        width: 100%;
        background-color: aliceblue;
        border-radius: 20px;
        margin: 10px 0px;
        color: black;
        color: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: 500;
      }
      .selected {
        color: white;
        background-color: red;
      }
    }
  }
  .Content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
  }
  .ContentA {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0px 7px;
    flex-wrap: wrap;
  }
`;
export default RankWrapper;
