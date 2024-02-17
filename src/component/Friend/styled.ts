import styled from "styled-components";
import img2 from "../../assets/img/bacgroundfriend.png";
const FriendWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  background: url(${img2}) no-repeat center center / cover;
  position: relative;
  .content {
    width: 80%;
    height: 3rem;
    /* background-color: red; */
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 8.5rem;
    text-align: center;
    line-height: 1rem;
    font-size: 16px;
    position: relative;
  }
  .contentA {
    width: 80%;
    height: 4.5rem;
    /* background-color: red; */
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: -11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .code {
      width: 140px;
      height: 140px;
      /* background-color: red; */
      .img {
        width: 140px;
        height: 140px;
      }
    }
    .title {
      background-color: rebeccapurple;

      height: 100px;
      width: 140px;
    }
    .invite-info {
      color: #333;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .invite-count {
      color: #333;
      font-size: 14px;
      margin-bottom: 16px;
    }

    .invite-button {
      background-color: #ffd700; /* Golden color */
      border: none;
      border-radius: 20px;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
`;
export default FriendWrapper;
