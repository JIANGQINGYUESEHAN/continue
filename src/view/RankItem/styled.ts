import styled from "styled-components";

const RankItemWrapper = styled.div`
  .content {
    width: 30vw;
    height: 240px;
    position: relative;
    margin: 0.2rem 0.1rem;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    .image {
      width: 30vw;
      height: 150px;
      position: relative;
      .over {
        width: 30vw;
        height: 40px;
        /* background-color: black; */
        position: absolute;
        bottom: 0px;
        text-align: right;
        line-height: 40px;
        color: white;
        padding: 0px 10px;
      }
      .img {
        width: 100%;
        height: 150px;
      }
    }
    .middle {
      width: 30vw;
      height: 90px;
      position: relative;

      .ItemName {
        width: 100%;
        flex: 1;
        /* background-color: #ffd77e; */

        line-height: 25px;
        padding: 0px 8px;
        white-space: nowrap; /* 保持文本在一行 */
        overflow: hidden; /* 隐藏超出部分的文本 */
        text-overflow: ellipsis; /* 使用省略号表示文本溢出 */
        font-weight: 400;
        font-size: 16px;
      }
      .Label {
        width: 200px;
        height: 30px;
        font-size: 14px;
        /* background-color: #ff4081; */
        display: flex;
        align-items: center;
        padding: 0px 4px;
        .LabelItem {
          margin-right: 8px;
          width: 50px;
          height: 25px;
          background-color: rgb(255, 239, 246);
          color: RGBA(178, 142, 158, 1);
          text-align: center;
          line-height: 25px;
          border-radius: 6px;
        }
        .LabelItemA {
          width: 60px;
          height: 25px;
          background-color: white;
          font-size: 12px;
          color: rgb(255, 56, 141);
          border: 1px solid rgb(255, 56, 141);
          text-align: center;
          line-height: 25px;
        }
      }
      .collect {
        width: 140px;
        height: 30px;
        font-size: 14px;
        padding: 0px 4px;
        /* background-color: #ff4081; */
        display: flex;
        align-items: center;
        margin-top: 2px;
        .LabelItem {
          margin-right: 4px;
          width: 50px;
          height: 25px;
          background-color: rgb(255, 56, 141);
          color: white;
          text-align: center;
          line-height: 25px;
          border-radius: 6px;
        }
      }
    }
  }
`;
export default RankItemWrapper;
