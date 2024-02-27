import styled from "styled-components";

const RankWrapper = styled.div`
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
  .content {
    width: 100%;
    height: auto;
    display: flex;

    padding: 0px 10px;
    .left {
      min-width: 80px;
      height: 100px;
      background-color: white;
      .leftUl {
        list-style: none;
        height: 30px;
        width: 60px;
        background-color: white;
        border-radius: 20px;
        margin: 10px 0px;
        color: black;
        color: 20px;
        text-align: center;
        line-height: 30px;
        font-weight: 500;
      }
      .selected {
        color: white;
        background-color: rgb(255, 20, 102);
      }
    }

    .all {
      width: 100%;
      height: 90vh;
      background-color: rgb(248, 247, 246);
      .Content {
        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
        width: 100%;

        flex-wrap: wrap;
      }
      .ContentA {
        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin: 0px 7px;
        flex-wrap: wrap;
      }
      .Content,
      .ContentA {
        display: flex;
        align-content: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin: 0px 7px;
        flex-wrap: wrap;
      }

      .Content > *:nth-child(odd),
      .ContentA > *:nth-child(odd) {
        margin: 10px; /* 在奇数元素右侧添加间隔 */
      }

      .Content > *:nth-child(even),
      .ContentA > *:nth-child(even) {
        margin: 10; /* 在偶数元素右侧不添加间隔 */
      }
    }
  }
`;
export default RankWrapper;
